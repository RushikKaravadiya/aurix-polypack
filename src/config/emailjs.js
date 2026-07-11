const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_xyz',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_xyz',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_xyz',
}

export default emailConfig
