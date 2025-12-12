import React, { useState, useRef, useEffect } from 'react';
import { Camera, MapPin, CreditCard, CheckCircle, ArrowRight, Star, ChevronRight } from 'lucide-react';

const HermesLogo = () => (
  // Increased Logo Size
  <div className="flex items-center justify-center font-bold text-5xl tracking-tighter select-none" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <span>Her</span>
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      width="40"
      height="60"
      className="w-10 h-16 -mx-1 text-black fill-transparent transform -skew-x-12"
      style={{ width: '40px', height: '60px', margin: '0 -4px' }}
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
    <span>mes</span>
  </div>
);

const ReviewCard = ({ name, text, time }) => (
  // Increased padding and text size for reviews
  <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
    <div className="flex items-center mb-3" style={{ display: 'flex', alignItems: 'center' }}>
      <div className="flex text-yellow-400" style={{ display: 'flex', color: '#facc15' }}>
        {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
      </div>
      <span className="text-gray-400 text-sm ml-auto" style={{ marginLeft: 'auto', color: '#9ca3af' }}>{time}</span>
    </div>
    <p className="text-gray-900 font-medium mb-6 text-lg leading-relaxed">"{text}"</p>
    <div className="flex items-center" style={{ display: 'flex', alignItems: 'center' }}>
      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold mr-4" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', color: 'white', borderRadius: '9999px', marginRight: '1rem' }}>
        {name.charAt(0)}
      </div>
      <span className="text-base font-bold text-gray-900">{name}</span>
    </div>
  </div>
);

export default function App() {
  const [step, setStep] = useState('home'); 
  const [image, setImage] = useState(null);
  const [address, setAddress] = useState({ from: '', to: '' });
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const scriptId = 'tailwind-cdn-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = "https://cdn.tailwindcss.com";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setStep('address');
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep('delivered');
    }, 1500);
  };

  const resetFlow = () => {
    setStep('home');
    setImage(null);
    setAddress({ from: '', to: '' });
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
      
      <style>{`
        @import url('https://cdn.tailwindcss.com');
        body { margin: 0; font-family: system-ui, sans-serif; overflow-x: hidden; }
        * { box-sizing: border-box; }
        img { max-width: 100%; height: auto; }
      `}</style>

      {/* Navigation: Increased max-width to 7xl and padding */}
      <nav className="p-8 flex justify-between items-center max-w-7xl mx-auto w-full" style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '80rem', margin: '0 auto' }}>
        <div className="cursor-pointer" onClick={resetFlow} style={{ cursor: 'pointer' }}>
          <HermesLogo />
        </div>
        <div className="hidden md:flex gap-8 text-base font-medium text-gray-500" style={{ display: 'flex', gap: '2rem', fontSize: '1.125rem' }}>
          <a href="mailto:help@hermes.olympus" className="hover:text-black cursor-pointer transition-colors" style={{ textDecoration: 'none', color: '#6b7280' }}>
            Support: help@hermes.olympus
          </a>
        </div>
      </nav>

      {/* Main Content Area: Increased max-width to 4xl for a wider central column */}
      <main className="flex-grow flex flex-col items-center justify-center p-8 w-full max-w-4xl mx-auto" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', width: '100%', maxWidth: '56rem', margin: '0 auto' }}>
        
        {/* STEP 1: HOME - MASSIVE SIZING */}
        {step === 'home' && (
          <div className="text-center space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ textAlign: 'center', width: '100%' }}>
            <div className="inline-block px-6 py-2 rounded-full bg-gray-100 text-sm font-bold tracking-wide uppercase mb-6" style={{ display: 'inline-block', padding: '0.5rem 1.5rem', borderRadius: '9999px', backgroundColor: '#f3f4f6', fontSize: '0.875rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              Now Available Globally
            </div>
            {/* Increased Clamp Sizes significantly */}
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none" style={{ fontSize: 'clamp(5rem, 15vw, 9rem)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.05em', margin: '0 0 1.5rem 0' }}>
              Speed of<br />the Gods.
            </h1>
            <p className="text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', color: '#6b7280', maxWidth: '42rem', margin: '0 auto', lineHeight: 1.5 }}>
              Global logistics reimagined. Instant delivery powered by divine intervention. No trucks. No waiting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-10" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', paddingTop: '2.5rem' }}>
              <button 
                onClick={() => setStep('upload')}
                className="group bg-black text-white text-2xl px-12 py-6 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-2xl"
                style={{ backgroundColor: 'black', color: 'white', fontSize: '1.5rem', padding: '1.5rem 3rem', borderRadius: '9999px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', cursor: 'pointer', border: 'none' }}
              >
                Ship Something Now
                <ArrowRight size={28} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: UPLOAD - Larger Dropzone */}
        {step === 'upload' && (
          <div className="w-full animate-in fade-in zoom-in-95 duration-300" style={{ width: '100%' }}>
            <h2 className="text-5xl font-black mb-4 tracking-tight" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1rem' }}>What are we shipping?</h2>
            <p className="text-xl text-gray-500 mb-10" style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2.5rem' }}>Snap a photo or upload an image of the item.</p>
            
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="border-4 border-dashed border-gray-200 hover:border-black hover:bg-gray-50 rounded-[2rem] p-20 text-center cursor-pointer transition-all group aspect-video flex flex-col items-center justify-center"
              style={{ borderWidth: '4px', borderStyle: 'dashed', borderColor: '#e5e7eb', borderRadius: '2rem', padding: '5rem', textAlign: 'center', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}
            >
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*" 
                style={{ display: 'none' }}
                onChange={handleImageUpload}
              />
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ width: '6rem', height: '6rem', backgroundColor: '#f3f4f6', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Camera size={48} className="text-gray-600" />
              </div>
              <p className="font-bold text-2xl mb-2">Take a Photo</p>
              <p className="text-lg text-gray-400">or click to upload from gallery</p>
            </div>
          </div>
        )}

        {/* STEP 3: ADDRESS - Larger Inputs */}
        {step === 'address' && (
          <div className="w-full animate-in slide-in-from-right-8 duration-300" style={{ width: '100%' }}>
            <div className="flex items-center gap-6 mb-10" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
              {image && (
                <img src={image} alt="Package" className="w-24 h-24 object-cover rounded-xl shadow-md border border-gray-100" style={{ width: '6rem', height: '6rem', objectFit: 'cover', borderRadius: '0.75rem' }} />
              )}
              <div>
                <h2 className="text-4xl font-black tracking-tight" style={{ fontSize: '2.25rem', fontWeight: 900 }}>Destination</h2>
                <p className="text-lg text-gray-500" style={{ fontSize: '1.125rem', color: '#6b7280' }}>Where is this going?</p>
              </div>
            </div>

            <div className="space-y-8" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="space-y-3">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-400 pl-1" style={{ fontSize: '0.875rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#9ca3af', paddingLeft: '0.25rem' }}>From</label>
                <div className="relative" style={{ position: 'relative' }}>
                  <MapPin className="absolute left-6 top-5 text-gray-400" size={24} style={{ position: 'absolute', left: '1.5rem', top: '1.25rem', color: '#9ca3af' }} />
                  <input 
                    type="text" 
                    placeholder="Current Location"
                    className="w-full bg-gray-50 border-none rounded-2xl py-5 pl-16 pr-6 text-xl font-medium focus:ring-2 focus:ring-black transition-all"
                    style={{ width: '100%', backgroundColor: '#f9fafb', border: 'none', borderRadius: '1rem', padding: '1.25rem 1.5rem 1.25rem 4rem', fontSize: '1.25rem', fontWeight: 500 }}
                    value={address.from}
                    onChange={(e) => setAddress({...address, from: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-400 pl-1" style={{ fontSize: '0.875rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#9ca3af', paddingLeft: '0.25rem' }}>To</label>
                <div className="relative" style={{ position: 'relative' }}>
                  <MapPin className="absolute left-6 top-5 text-black" size={24} style={{ position: 'absolute', left: '1.5rem', top: '1.25rem', color: 'black' }} />
                  <input 
                    type="text" 
                    placeholder="Recipient's Address"
                    className="w-full bg-gray-50 border-none rounded-2xl py-5 pl-16 pr-6 text-xl font-medium focus:ring-2 focus:ring-black transition-all"
                    style={{ width: '100%', backgroundColor: '#f9fafb', border: 'none', borderRadius: '1rem', padding: '1.25rem 1.5rem 1.25rem 4rem', fontSize: '1.25rem', fontWeight: 500 }}
                    value={address.to}
                    onChange={(e) => setAddress({...address, to: e.target.value})}
                  />
                </div>
              </div>

              <button 
                onClick={() => setStep('payment')}
                disabled={!address.to}
                className="w-full bg-black text-white py-6 rounded-2xl font-bold text-2xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-all flex items-center justify-center gap-3 mt-6 shadow-xl"
                style={{ width: '100%', backgroundColor: 'black', color: 'white', padding: '1.5rem', borderRadius: '1rem', fontWeight: 'bold', fontSize: '1.5rem', marginTop: '1.5rem', cursor: address.to ? 'pointer' : 'not-allowed', opacity: address.to ? 1 : 0.5, border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                Continue to Payment <ChevronRight size={28} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: PAYMENT - Larger Card */}
        {step === 'payment' && (
          <div className="w-full max-w-lg animate-in slide-in-from-right-8 duration-300" style={{ width: '100%', maxWidth: '32rem' }}>
             <div className="mb-10 text-center" style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
                <h2 className="text-4xl font-black tracking-tight" style={{ fontSize: '2.25rem', fontWeight: 900 }}>Instant Payment</h2>
                <p className="text-lg text-gray-500" style={{ fontSize: '1.125rem', color: '#6b7280' }}>Secure divine transaction.</p>
              </div>

            <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-[2rem] text-white shadow-2xl mb-10 transform hover:scale-105 transition-transform duration-500" style={{ background: 'linear-gradient(to bottom right, #111827, #000000)', padding: '2.5rem', borderRadius: '2rem', color: 'white', marginBottom: '2.5rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
              <div className="flex justify-between items-start mb-10" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
                <CreditCard size={48} />
                <span className="font-mono text-sm opacity-50" style={{ fontFamily: 'monospace', fontSize: '0.875rem', opacity: 0.5 }}>HERMES CARD</span>
              </div>
              <div className="space-y-8">
                <div className="h-10 bg-gray-800 rounded w-full animate-pulse opacity-20" style={{ height: '2.5rem', backgroundColor: '#374151', borderRadius: '0.25rem', width: '100%', opacity: 0.2 }}></div>
                <div className="flex justify-between items-end" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '2rem' }}>
                  <div className="space-y-2">
                    <p className="text-xs uppercase opacity-50 tracking-widest" style={{ fontSize: '12px', textTransform: 'uppercase', opacity: 0.5, letterSpacing: '0.1em' }}>Card Holder</p>
                    <p className="text-lg font-medium tracking-widest" style={{ fontSize: '1.125rem', fontWeight: 500, letterSpacing: '0.1em' }}>ENTREPRENEUR</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs uppercase opacity-50 tracking-widest text-right" style={{ fontSize: '12px', textTransform: 'uppercase', opacity: 0.5, letterSpacing: '0.1em', textAlign: 'right' }}>Expires</p>
                    <p className="text-lg font-medium tracking-widest" style={{ fontSize: '1.125rem', fontWeight: 500, letterSpacing: '0.1em' }}>∞/∞</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mb-8 py-6 border-t border-b border-gray-100" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', paddingTop: '1.5rem', paddingBottom: '1.5rem', borderTop: '1px solid #f3f4f6', borderBottom: '1px solid #f3f4f6' }}>
              <span className="text-xl text-gray-500 font-medium" style={{ fontSize: '1.25rem', color: '#6b7280', fontWeight: 500 }}>Total Cost</span>
              <span className="text-4xl font-black tracking-tight" style={{ fontSize: '2.25rem', fontWeight: 900 }}>$1.99</span>
            </div>

            <button 
              onClick={handlePayment}
              disabled={isProcessing}
              className="w-full bg-black text-white py-6 rounded-2xl font-bold text-2xl hover:bg-gray-800 active:scale-95 transition-all flex items-center justify-center gap-4"
              style={{ width: '100%', backgroundColor: 'black', color: 'white', padding: '1.5rem', borderRadius: '1rem', fontWeight: 'bold', fontSize: '1.5rem', cursor: isProcessing ? 'wait' : 'pointer', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}
            >
              {isProcessing ? (
                <>
                  <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" style={{ width: '1.5rem', height: '1.5rem', borderWidth: '4px', borderColor: 'rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '9999px' }} />
                  Processing...
                </>
              ) : (
                'Pay & Deliver Instantly'
              )}
            </button>
          </div>
        )}

        {/* STEP 5: SUCCESS - Huge Icon */}
        {step === 'delivered' && (
          <div className="text-center w-full animate-in zoom-in-50 duration-500" style={{ textAlign: 'center', width: '100%' }}>
            <div className="w-48 h-48 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-green-200 shadow-2xl animate-bounce" style={{ width: '12rem', height: '12rem', backgroundColor: '#22c55e', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2.5rem auto', boxShadow: '0 25px 50px -12px rgba(34, 197, 94, 0.25)' }}>
              <CheckCircle size={96} className="text-white" style={{ color: 'white' }} />
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-6" style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '1.5rem' }}>DELIVERED.</h2>
            <p className="text-2xl text-gray-500 mb-10 max-w-lg mx-auto" style={{ fontSize: '1.5rem', color: '#6b7280', marginBottom: '2.5rem', maxWidth: '32rem', margin: '0 auto 2.5rem auto' }}>
              Your package has arrived at <strong>{address.to || 'Destination'}</strong>.
              <br/>Time elapsed: 0.0001s.
            </p>
            <button 
              onClick={resetFlow}
              className="bg-gray-100 text-black px-12 py-4 rounded-full font-bold text-xl hover:bg-gray-200 transition-colors"
              style={{ backgroundColor: '#f3f4f6', color: 'black', padding: '1rem 3rem', borderRadius: '9999px', fontWeight: 'bold', fontSize: '1.25rem', border: 'none', cursor: 'pointer' }}
            >
              Send Another
            </button>
          </div>
        )}

      </main>

      {/* REVIEWS SECTION - Wider container */}
      <section className="bg-white border-t border-gray-100 py-24" style={{ backgroundColor: 'white', borderTop: '1px solid #f3f4f6', padding: '6rem 0' }}>
        <div className="max-w-7xl mx-auto px-8" style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
          <div className="flex items-center justify-between mb-12" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem' }}>
            <h3 className="text-4xl font-black tracking-tight" style={{ fontSize: '2.25rem', fontWeight: 900 }}>Recent Deliveries</h3>
            <div className="text-base font-bold text-green-600 flex items-center gap-2" style={{ fontSize: '1rem', fontWeight: 'bold', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div className="w-3 h-3 rounded-full bg-green-600 animate-pulse" style={{ width: '0.75rem', height: '0.75rem', borderRadius: '9999px', backgroundColor: '#16a34a' }}></div>
              Live Feed
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            <ReviewCard 
              name="Sarah J."
              text="I literally blinked and my Shopify order was at the customer's house. How is this even legal? 10/10."
              time="2m ago"
            />
            <ReviewCard 
              name="Mike T."
              text="USPS quoted me 3 days. Hermes did it in 3 seconds. My profit margins just doubled."
              time="5m ago"
            />
            <ReviewCard 
              name="Jessica R."
              text="The fee was basically nothing. I don't know who this Hermes guy is, but he's saving my startup."
              time="12m ago"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-16 px-8" style={{ backgroundColor: 'black', color: 'white', padding: '4rem 2rem' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 opacity-50 text-base" style={{ maxWidth: '80rem', margin: '0 auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', opacity: 0.5, fontSize: '1rem' }}>
          <p>© 2025 Hermes Logistics. Powered by Olympus.</p>
          <div className="flex gap-8" style={{ display: 'flex', gap: '2rem' }}>
            <button type="button" className="hover:text-white transition-colors" style={{ background: 'none', border: 'none', padding: 0, font: 'inherit', cursor: 'pointer', color: 'inherit' }}>Terms</button>
            <button type="button" className="hover:text-white transition-colors" style={{ background: 'none', border: 'none', padding: 0, font: 'inherit', cursor: 'pointer', color: 'inherit' }}>Privacy</button>
            <button type="button" className="hover:text-white transition-colors" style={{ background: 'none', border: 'none', padding: 0, font: 'inherit', cursor: 'pointer', color: 'inherit' }}>Divine Contracts</button>
          </div>
        </div>
      </footer>
    </div>
  );
}