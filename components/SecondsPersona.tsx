import React from 'react';
import { User, AlertTriangle, CheckCircle, Smile, Smartphone, Quote, HelpCircle } from 'lucide-react';

const StudentPersona = () => {
  return (
    <div className="min-h-screen bg-white p-8 font-sans text-slate-700">
      {/* Header Section */}
      <header className="mb-8 flex items-center justify-center relative">
        <div className="relative">
          <h1 className="text-5xl font-bold text-slate-800 z-10 relative">
            User <span className="text-indigo-500">Persona</span>
          </h1>
          {/* Decorative underline - slightly different angle for student */}
          <div className="absolute -bottom-2 -left-4 w-full h-full border-4 border-pink-200 rounded-full opacity-50 -z-0 transform rotate-1 scale-110"></div>
        </div>
      </header>

      {/* Main Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* COLUMN 1: PROFILE & BEHAVIOR (Left Sidebar) */}
        <div className="space-y-6">
          
          {/* Profile Card */}
          <div className="bg-stone-50 rounded-3xl p-6 border-2 border-stone-100 shadow-sm">
            <div className="w-32 h-32 bg-teal-100 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden border-4 border-white shadow-md">
              {/* Placeholder for Avatar */}
              <img src="/student.jpg" alt="" className='w-full h-full object-cover object-top'/>
              {/* <User size={64} className="text-teal-600 "/> */}
            </div>
            <h2 className="text-2xl font-bold text-center text-slate-800">Aditya Sharma</h2>
            <p className="text-center text-slate-500 font-medium mb-4">1st Year Student | Age 19</p>
            
            <div className="bg-white p-4 rounded-2xl text-sm leading-relaxed shadow-sm">
              <p>
                <strong>Bio:</strong> A first-year student living in the hostel. he relies on campus Wi-Fi for MDC tests, assignments, and recorded lectures.
              </p>
              <p className="mt-2">
                <strong>Key Context:</strong> he is not very technical. Unclear instructions or error messages trigger anxiety, especially during time-sensitive tasks like exams.
              </p>
            </div>
          </div>

          {/* Behaviour Section */}
          {/* Changed to Lavender for Student Vibe */}
          <div className="bg-violet-100 rounded-3xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <HelpCircle className="text-violet-700" size={20} />
              <h3 className="font-bold text-lg text-violet-800">BEHAVIOUR</h3>
            </div>
            <ul className="space-y-2 text-sm text-violet-900 font-medium">
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span> Opens and closes the login page repeatedly hoping it will work.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span> Double-checks username constantly, unsure of the format (@lpu.com?).
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span> Visibly worried about missing deadlines when connection fails.
              </li>
            </ul>
          </div>

        </div>

        {/* COLUMN 2 & 3: DETAILS (Main Content) */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 content-start">
          
          {/* Pain Points */}
          <div className="bg-red-50 rounded-3xl p-6 border border-red-100 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="text-red-500" />
              <h3 className="font-bold text-lg text-red-800 uppercase">Frustrations</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Hard to understand what to enter in the username field.</li>
              <li>• Error messages appear without explaining the "Why".</li>
              <li>• Panic caused by login delays during important tests.</li>
              <li>• Mobile version is not user-friendly (her primary device).</li>
              <li>• Login button sometimes reloads page instead of connecting.</li>
            </ul>
          </div>

          {/* Goals */}
          <div className="bg-teal-50 rounded-3xl p-6 border border-teal-100 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="text-teal-600" />
              <h3 className="font-bold text-lg text-teal-800 uppercase">Goals</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• A clearly designed login page with step-by-step guidance.</li>
              <li>• Smooth and fast login, especially during exams.</li>
              <li>• Mobile-friendly interface for hostel connectivity.</li>
              <li>• Clear confirmation when connected.</li>
            </ul>
          </div>

          {/* Motivation */}
          <div className="bg-pink-50 rounded-3xl p-6 border border-pink-100 shadow-sm md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <Smile className="text-pink-500" />
              <h3 className="font-bold text-lg text-pink-800 uppercase">Motivation</h3>
            </div>
            <div className="flex flex-col md:flex-row gap-4 text-sm text-slate-700">
               <p className="flex-1">"Wants peace of mind during assignments and exams. Prefers interfaces that don't make her feel 'not tech-savvy'."</p>
               <p className="flex-1 border-l-2 border-pink-200 pl-4">"Motivated to avoid mistakes and reduce the stress caused by technical issues."</p>
            </div>
          </div>

          {/* Technology Usage */}
          <div className="bg-blue-50 rounded-3xl p-6 border border-blue-100 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Smartphone className="text-blue-600" />
              <h3 className="font-bold text-lg text-blue-800 uppercase">Tech Stack</h3>
            </div>
            <div className="space-y-3 text-sm">
                <div>
                    <span className="font-bold text-blue-900">Mobile (Primary):</span>
                    <p className="text-slate-600">Wi-Fi login (Hostel/Class), Socials.</p>
                </div>
                <div>
                    <span className="font-bold text-blue-900">Laptop (Secondary):</span>
                    <p className="text-slate-600">Used mainly inside classrooms.</p>
                </div>
                <div>
                    <span className="font-bold text-blue-900">Browsers:</span>
                    <p className="text-slate-600">Chrome, Safari, Campus LMS App.</p>
                </div>
            </div>
          </div>

          {/* Quote / Insights */}
          <div className="bg-stone-100 rounded-3xl p-6 flex flex-col justify-center shadow-sm">
             <div className="mb-2 text-stone-400">
                <Quote size={32} />
             </div>
             <p className="text-lg font-serif italic text-stone-700 leading-relaxed">
               “During MDC tests, the Wi-Fi login takes so long. If I miss the test, they blame me — but the system itself is confusing.”
             </p>
             <div className="mt-4 flex items-center gap-2">
                <div className="h-1 w-8 bg-indigo-500 rounded-full"></div>
                <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">User Insight</span>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StudentPersona;