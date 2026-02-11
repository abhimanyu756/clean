import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

interface BulkOrderModalProps {
    isOpen: boolean;
    onClose: () => void;
    serviceId: string;
    templateId: string;
    publicKey: string;
}

const BulkOrderModal: React.FC<BulkOrderModalProps> = ({ isOpen, onClose, serviceId, templateId, publicKey }) => {
    const form = useRef<HTMLFormElement>(null);
    // idle | submitting | success | error
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const initialFormData = {
        from_name: '',
        phone: '',
        reply_to: '',
        event_type: 'Marriage',
        event_date: '',
        bottle_size: '250 ml',
        quantity: '',
        address: '',
        user_notes: ''
    };

    const [formData, setFormData] = useState(initialFormData);

    useEffect(() => {
        if (isOpen) {
            setStatus('idle');
            setErrorMessage('');
            // Optional: reset form data or keep it? Keeping it prevents data loss on accidental close.
            // But if success was shown, we should reset.
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const combinedMessage = `
--- NEW BULK ORDER INQUIRY ---

Customer Details:
Name: ${formData.from_name}
Phone: ${formData.phone}
Email: ${formData.reply_to}

Order Specifics:
Event Type: ${formData.event_type}
Event Date: ${formData.event_date || 'Not specified'}
Bottle Size: ${formData.bottle_size}
Quantity: ${formData.quantity}

Delivery Location:
${formData.address}

Customer Notes:
${formData.user_notes || 'None'}
    `.trim();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        if (form.current) {
            emailjs
                .sendForm(serviceId, templateId, form.current, {
                    publicKey: publicKey,
                })
                .then(
                    () => {
                        setStatus('success');
                        setFormData(initialFormData);
                    },
                    (error) => {
                        console.error("FAILED...", error);
                        setStatus('error');
                        setErrorMessage("Failed to send query. Please check your connection or try again later.");
                    }
                );
        }
    };

    const inputClasses = "w-full rounded-md border border-slate-300 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent";
    const labelClasses = "block text-sm font-medium text-slate-700 mb-1";

    // --- Success View ---
    if (status === 'success') {
        return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
                <div className="bg-white rounded-lg shadow-xl w-full max-w-sm p-8 text-center">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">Order Received!</h2>
                    <p className="text-slate-600 mb-6">We have received your bulk order inquiry. We will get back to you with a quote within 24 hours.</p>
                    <button
                        onClick={onClose}
                        className="w-full bg-slate-900 text-white font-semibold py-3 rounded-md hover:bg-slate-800 transition-colors shadow-md"
                    >
                        Close
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center p-6 border-b border-slate-100 sticky top-0 bg-white z-10">
                    <h2 className="text-xl font-bold text-slate-800">Bulk Order Inquiry</h2>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>

                <form ref={form} onSubmit={handleSubmit} className="p-6 space-y-4">
                    {/* Status Message (Error) */}
                    {status === 'error' && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm border border-red-100">
                            {errorMessage}
                        </div>
                    )}

                    {/* Hidden Message Field */}
                    <textarea name="message" className="hidden" value={combinedMessage} readOnly />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label htmlFor="from_name" className={labelClasses}>Full Name</label>
                            <input type="text" name="from_name" value={formData.from_name} onChange={handleChange} required className={inputClasses} placeholder="Your Name" />
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="phone" className={labelClasses}>Phone Number</label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className={inputClasses} placeholder="+91 98765 43210" />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="reply_to" className={labelClasses}>Email Address</label>
                        <input type="email" name="reply_to" value={formData.reply_to} onChange={handleChange} required className={inputClasses} placeholder="you@example.com" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label htmlFor="event_type" className={labelClasses}>Event Type</label>
                            <select name="event_type" value={formData.event_type} onChange={handleChange} className={inputClasses}>
                                <option value="Marriage">Marriage</option>
                                <option value="Party">Party</option>
                                <option value="Corporate Event">Corporate Event</option>
                                <option value="Retail/Shop">Retail/Shop Supply</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="event_date" className={labelClasses}>Event Date (Approx)</label>
                            <input type="date" name="event_date" value={formData.event_date} onChange={handleChange} className={inputClasses} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label htmlFor="bottle_size" className={labelClasses}>Bottle Size</label>
                            <select name="bottle_size" value={formData.bottle_size} onChange={handleChange} className={inputClasses}>
                                <option value="250 ml">250 ml</option>
                                <option value="500 ml">500 ml</option>
                                <option value="1 Litre">1 Litre</option>
                                <option value="2 Litre">2 Litre</option>
                                <option value="20 Litre Jar">20 Litre Jar</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="quantity" className={labelClasses}>Quantity</label>
                            <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} required className={inputClasses} placeholder="e.g. 100" min="1" />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="address" className={labelClasses}>Delivery Address / Location</label>
                        <textarea name="address" value={formData.address} onChange={handleChange} required className={inputClasses} rows={2} placeholder="Event location or delivery address"></textarea>
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="user_notes" className={labelClasses}>Additional Message</label>
                        <textarea name="user_notes" value={formData.user_notes} onChange={handleChange} className={inputClasses} rows={2} placeholder="Any specific requirements..."></textarea>
                    </div>

                    <div className="pt-4 sticky bottom-0 bg-white pb-2">
                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full bg-red-600 text-white font-semibold py-3 rounded-md hover:bg-red-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-md flex items-center justify-center gap-2"
                        >
                            {status === 'submitting' && (
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            )}
                            {status === 'submitting' ? "Sending..." : "Submit Order Inquiry"}
                        </button>
                        <p className="text-xs text-center text-slate-500 mt-2">We will revert with a quote within 24 hours.</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BulkOrderModal;
