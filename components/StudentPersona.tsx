import React from 'react';
import { User, AlertCircle, Target, Zap, Monitor, Quote, Clock } from 'lucide-react';

const PersonaDesign = () => {
  return (
    // FIX APPLIED HERE: Changed 'min-h-screen' to 'h-fit w-full' to remove bottom whitespace
    <div className="h-fit w-full bg-white p-8 font-sans text-slate-700">
      {/* Header Section */}
      <header className="mb-8 flex items-center justify-center relative">
        <div className="relative">
          <h1 className="text-5xl font-bold text-slate-800 z-10 relative">
            User <span className="text-teal-600">Persona</span>
          </h1>
          {/* Decorative underline/circle element mimicking the sketch in your image */}
          <div className="absolute -bottom-2 -left-4 w-full h-full border-4 border-yellow-200 rounded-full opacity-50 -z-0 transform -rotate-2 scale-110"></div>
        </div>
      </header>

      {/* Main Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* COLUMN 1: PROFILE & BEHAVIOR (Left Sidebar) */}
        <div className="space-y-6">
          
          {/* Profile Card */}
          <div className="bg-stone-50 rounded-3xl p-6 border-2 border-stone-100 shadow-sm">
            <div className="w-32 h-32 bg-teal-100 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden border-4 border-white shadow-md">
            
              <img src="/teacherl.jpg" alt="" className='w-full h-full object-cover object-top'/>
              
              {/* <User size={64} className="text-teal-600 "/> */}
            </div>
            
            <h2 className="text-2xl font-bold text-center text-slate-800">Prof. Arvind Mehta</h2>
            <p className="text-center text-slate-500 font-medium mb-4">Senior Faculty | Age 39</p>
            
            <div className="bg-white p-4 rounded-2xl text-sm leading-relaxed shadow-sm">
              <p>
                <strong>Bio:</strong> A senior faculty member in the School of Computer Applications. He manages a tight schedule of offline/online sessions and relies heavily on the LMS and Google Meet.
              </p>
              <p className="mt-2">
                <strong>Key Context:</strong> Tech delays directly impact his teaching flow. The Wi-Fi login interface is his primary gateway to conducting class.
              </p>
            </div>
          </div>

          {/* Behaviour Section */}
          <div className="bg-lime-100 rounded-3xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="text-lime-700" size={20} />
              <h3 className="font-bold text-lg text-lime-800">BEHAVIOUR</h3>
            </div>
            <ul className="space-y-2 text-sm text-lime-900 font-medium">
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span> Logs in 10–15 mins before class to ensure connectivity.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span> Visibly stressed if login fails; tries refreshing/switching devices immediately.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span> Receives student complaints about the same interface, increasing frustration.
              </li>
            </ul>
          </div>

        </div>

        {/* COLUMN 2 & 3: DETAILS (Main Content) */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 content-start">
          
          {/* Pain Points */}
          <div className="bg-red-50 rounded-3xl p-6 border border-red-100 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="text-red-500" />
              <h3 className="font-bold text-lg text-red-800 uppercase">Pain Points</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Login issues delay start of class (lost lecture time).</li>
              <li>• Interrupted class flow due to students asking for help.</li>
              <li>• Unclear username rules (with or without @lpu.com?).</li>
              <li>• Vague error messages make troubleshooting hard.</li>
              <li>• Mobile interface is not optimized for quick access.</li>
            </ul>
          </div>

          {/* Goals */}
          <div className="bg-teal-50 rounded-3xl p-6 border border-teal-100 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Target className="text-teal-600" />
              <h3 className="font-bold text-lg text-teal-800 uppercase">Goals</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Quick, reliable Wi-Fi login to save teaching minutes.</li>
              <li>• Simple interface to reduce student technical confusion.</li>
              <li>• Stable connection for online tests and cloud resources.</li>
              <li>• Zero troubleshooting required during class time.</li>
            </ul>
          </div>

          {/* Motivation */}
          <div className="bg-amber-50 rounded-3xl p-6 border border-amber-100 shadow-sm md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="text-amber-500" />
              <h3 className="font-bold text-lg text-amber-800 uppercase">Motivation</h3>
            </div>
            <div className="flex flex-col md:flex-row gap-4 text-sm text-slate-700">
               <p className="flex-1">"Wants to deliver smooth lectures and believes a well-designed interface increases productivity for everyone."</p>
               <p className="flex-1 border-l-2 border-amber-200 pl-4">"Motivated by the desire to maintain professionalism and efficiency in the classroom."</p>
            </div>
          </div>

          {/* Technology Usage */}
          <div className="bg-sky-50 rounded-3xl p-6 border border-sky-100 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Monitor className="text-sky-600" />
              <h3 className="font-bold text-lg text-sky-800 uppercase">Tech Stack</h3>
            </div>
            <div className="space-y-3 text-sm">
                <div>
                    <span className="font-bold text-sky-900">Laptop (Primary):</span>
                    <p className="text-slate-600">Presentations, Coding Demos, LMS.</p>
                </div>
                <div>
                    <span className="font-bold text-sky-900">Mobile (Secondary):</span>
                    <p className="text-slate-600">Quick login, Attendance, Comm.</p>
                </div>
                <div>
                    <span className="font-bold text-sky-900">Apps:</span>
                    <p className="text-slate-600">Chrome, LMS Portal, Google Meet.</p>
                </div>
            </div>
          </div>

          {/* Quote / Insights */}
          <div className="bg-stone-100 rounded-3xl p-6 flex flex-col justify-center shadow-sm">
             <div className="mb-2 text-stone-400">
                <Quote size={32} />
             </div>
             <p className="text-lg font-serif italic text-stone-700 leading-relaxed">
               “Class time is precious. A confusing login page shouldn’t be the reason my lecture starts late.”
             </p>
             <div className="mt-4 flex items-center gap-2">
                <div className="h-1 w-8 bg-teal-500 rounded-full"></div>
                <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">User Insight</span>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PersonaDesign;