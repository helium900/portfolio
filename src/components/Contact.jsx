import React, { useState, useRef } from 'react';
import { Mail, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Linkedin, Github } from './Icons.jsx';
import emailjs from '@emailjs/browser';

function Contact({ theme }) {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); 

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      return;
    }

    setStatus('submitting');

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_PUBLIC_KEY
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });

      
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setStatus('error');

        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      });
  };

  const isDark = theme === 'dark';

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-transparent relative">
      <div className="max-w-7xl mx-auto">

      
        <div className="text-center mb-16 reveal-element">
          <h2 className={`font-poppins font-bold text-3xl md:text-4xl tracking-tight mb-4 transition-colors duration-500 ${isDark ? 'text-white' : 'text-slate-900'
            }`}>Get In Touch</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className={`max-w-xl mx-auto text-base sm:text-lg transition-colors duration-500 font-medium ${isDark ? 'text-slate-200' : 'text-slate-900'
            }`}>
            Have an exciting project or job opportunity? Send a message below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          
          <div className="lg:col-span-5 flex flex-col justify-between reveal-element">
            <div>
              <h3 className={`font-poppins font-semibold text-2xl mb-6 transition-colors duration-500 ${isDark ? 'text-white' : 'text-slate-900'
                }`}>Contact Information</h3>
              <p className={`text-sm sm:text-base leading-relaxed mb-8 transition-colors duration-500 font-medium ${isDark ? 'text-slate-200' : 'text-slate-900'
                }`}>
                Feel free to contact me directly using the information below or by submitting the contact form. I try my best to respond within 24 hours.
              </p>

              <div className="space-y-6">

               
                <div className="flex items-center gap-4 group">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 border group-hover:bg-indigo-650 group-hover:text-white ${isDark ? 'bg-slate-900/60 text-indigo-400 border-white/5' : 'bg-indigo-50 text-indigo-600 border-indigo-100'
                    }`}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`block text-xs font-semibold font-poppins uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}>Email</span>
                    <a
                      href="mailto:Divyashishnegi@gmail.com"
                      className={`font-medium transition-colors break-all ${isDark ? 'text-slate-300 hover:text-indigo-400' : 'text-slate-700 hover:text-indigo-600'
                        }`}
                    >
                      Divyashishnegi@gmail.com
                    </a>
                  </div>
                </div>

         
                <div className="flex items-center gap-4 group">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 border group-hover:bg-indigo-650 group-hover:text-white ${isDark ? 'bg-slate-900/60 text-indigo-400 border-white/5' : 'bg-indigo-50 text-indigo-600 border-indigo-100'
                    }`}>
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`block text-xs font-semibold font-poppins uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}>LinkedIn</span>
                    <a
                      href="https://www.linkedin.com/in/divyashish-negi-72641831b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`font-medium transition-colors break-all ${isDark ? 'text-slate-300 hover:text-indigo-400' : 'text-slate-700 hover:text-indigo-650'
                        }`}
                    >
                      linkedin.com/in/divyashish-negi-72641831b
                    </a>
                  </div>
                </div>

           
                <div className="flex items-center gap-4 group">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 border group-hover:bg-indigo-650 group-hover:text-white ${isDark ? 'bg-slate-900/60 text-indigo-400 border-white/5' : 'bg-indigo-50 text-indigo-600 border-indigo-100'
                    }`}>
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`block text-xs font-semibold font-poppins uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}>GitHub</span>
                    <a
                      href="https://github.com/helium900"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`font-medium transition-colors break-all ${isDark ? 'text-slate-300 hover:text-indigo-400' : 'text-slate-700 hover:text-indigo-650'
                        }`}
                    >
                      github.com/helium900
                    </a>
                  </div>
                </div>

             
                <div className="flex items-center gap-4 group">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 border group-hover:bg-indigo-650 group-hover:text-white ${isDark ? 'bg-slate-900/60 text-indigo-400 border-white/5' : 'bg-indigo-50 text-indigo-600 border-indigo-100'
                    }`}>
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`block text-xs font-semibold font-poppins uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}>Mobile Number</span>
                    <a
                      href="tel:+919876543210"
                      className={`font-medium transition-colors ${isDark ? 'text-slate-300 hover:text-indigo-400' : 'text-slate-700 hover:text-indigo-600'
                        }`}
                    >
                      +91 7357644803
                    </a>
                  </div>
                </div>

              </div>
            </div>

         
            <div className={`mt-12 p-5 border rounded-2xl hidden lg:block transition-all duration-500 ${isDark ? 'bg-indigo-950/20 border-indigo-500/20' : 'bg-indigo-50/50 border-indigo-100/50'
              }`}>
              <p className={`text-xs leading-relaxed transition-colors duration-500 ${isDark ? 'text-indigo-300' : 'text-indigo-800'
                }`}>
                <span className="font-semibold">💡 Recruiter Tip:</span> You can also view my live repositories, contributions, and active branches by visiting my GitHub account directly.
              </p>
            </div>
          </div>

          
          <div className="lg:col-span-7 reveal-element" style={{ transitionDelay: '150ms' }}>
            <form ref={form} onSubmit={handleSubmit} className={`p-8 rounded-2xl shadow-lg border space-y-6 transition-all duration-500 ${isDark ? 'bg-slate-900/40 border-white/5 shadow-black/15' : 'bg-white border-slate-100/80'
              }`}>

             
              <div className="flex flex-col">
                <label htmlFor="name" className={`font-poppins text-xs font-semibold mb-2 uppercase tracking-wide transition-colors duration-500 ${isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={`px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 font-medium placeholder-slate-400 ${isDark ? 'bg-slate-950/60 border-white/10 text-white focus:bg-slate-950' : 'bg-slate-50 border-slate-200 text-slate-800'
                    }`}
                  placeholder="Name"
                />
              </div>

             
              <div className="flex flex-col">
                <label htmlFor="email" className={`font-poppins text-xs font-semibold mb-2 uppercase tracking-wide transition-colors duration-500 ${isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 font-medium placeholder-slate-400 ${isDark ? 'bg-slate-950/60 border-white/10 text-white focus:bg-slate-950' : 'bg-slate-50 border-slate-200 text-slate-800'
                    }`}
                  placeholder="Name@gmail.com"
                />
              </div>

            
              <div className="flex flex-col">
                <label htmlFor="message" className={`font-poppins text-xs font-semibold mb-2 uppercase tracking-wide transition-colors duration-500 ${isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className={`px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 font-medium placeholder-slate-400 resize-none ${isDark ? 'bg-slate-950/60 border-white/10 text-white focus:bg-slate-950' : 'bg-slate-50 border-slate-200 text-slate-800'
                    }`}
                  placeholder="Write your message here..."
                ></textarea>
              </div>

           
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 bg-indigo-600 text-white font-poppins font-semibold text-sm rounded-xl btn-glow hover:bg-indigo-500 transition-all duration-300 flex items-center justify-center gap-2 disabled:bg-indigo-400 cursor-pointer"
              >
                {status === 'submitting' ? (
                  <>
                    Sending Message
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </>
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </button>

           
              {status === 'success' && (
                <div id="form-success" className={`p-4 border text-xs sm:text-sm rounded-xl flex items-center gap-3 transition-colors duration-500 ${isDark ? 'bg-emerald-950/20 border-emerald-500/20 text-emerald-400' : 'bg-emerald-50 border border-emerald-100 text-emerald-800'
                  }`}>
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Thank you! Your message has been sent successfully. I'll get back to you shortly.</span>
                </div>
              )}

              {status === 'error' && (
                <div id="form-error" className={`p-4 border text-xs sm:text-sm rounded-xl flex items-center gap-3 transition-colors duration-500 ${isDark ? 'bg-rose-950/20 border-rose-500/20 text-rose-400' : 'bg-rose-50 border border-rose-100 text-rose-800'
                  }`}>
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  <span>Oops! Something went wrong. Please fill out all fields and try again.</span>
                </div>
              )}

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
