"use client";

import { useState } from "react";
import { SignInForm } from "@/components/02-authentication/SignInForm";
import { SignUpForm } from "@/components/02-authentication/SignUpForm";
import { Text } from "@/components/ui/typography";

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");

  return (
    <div className="w-full max-w-container-max mx-auto flex flex-col lg:flex-row border-4 border-outline shadow-[8px_8px_0px_0px_rgba(189,0,255,0.5)] md:shadow-[16px_16px_0px_0px_rgba(189,0,255,0.4)] bg-surface relative z-10 overflow-hidden min-h-[500px]">
      <div className="hidden lg:flex w-full lg:w-5/12 border-r-4 border-outline bg-surface-container flex-col justify-between relative group">
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface/50"></div>
        <div className="relative z-10 p-xl flex items-center gap-sm">
          <span className="material-symbols-outlined text-headline-lg text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
            terminal
          </span>
          <Text type="display-hero" className="text-primary italic uppercase tracking-tighter">DevDrill</Text>
        </div>
        <div className="relative z-10 p-xl">
          <Text as="h1" type="display-hero" className="mb-md">SYSTEM<br/>ACCESS</Text>
          <Text as="p" type="code-sm" className="text-secondary-fixed-dim bg-surface-container-highest inline-block p-sm border border-outline-variant">STATUS: WAITING_FOR_INPUT_</Text>
        </div>
      </div>
      
      <div className="w-full lg:w-7/12 p-lg md:p-xl bg-surface flex flex-col justify-center items-stretch">
        <div className="lg:hidden flex items-center gap-sm mb-xl">
          <span className="material-symbols-outlined text-headline-md text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
          <Text type="display-hero" className="text-[2rem] text-primary italic uppercase tracking-tighter">DevDrill</Text>
        </div>
        
        <div className="w-full max-w-[448px] mx-auto">
          <div className="w-full flex border-4 border-outline-variant bg-surface-container-low mb-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <button 
              type="button"
              onClick={() => setActiveTab("signin")}
              className={`flex-1 py-md border-r-4 border-outline-variant flex items-center justify-center gap-sm ${
                activeTab === "signin" 
                  ? "bg-primary text-on-primary shadow-[inset_-2px_-2px_0px_0px_rgba(0,0,0,0.3)]" 
                  : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
              }`}
            >
              <span className="material-symbols-outlined text-body-md" style={{ fontVariationSettings: "'FILL' 1" }}>login</span>
              <Text type="label-caps" className="text-inherit">SIGN IN</Text>
            </button>
            <button 
              type="button"
              onClick={() => setActiveTab("signup")}
              className={`flex-1 py-md flex items-center justify-center gap-sm ${
                activeTab === "signup" 
                  ? "bg-primary text-on-primary shadow-[inset_-2px_-2px_0px_0px_rgba(0,0,0,0.3)]" 
                  : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
              }`}
            >
              <span className="material-symbols-outlined text-body-md" style={{ fontVariationSettings: "'FILL' 1" }}>person_add</span>
              <Text type="label-caps" className="text-inherit">SIGN UP</Text>
            </button>
          </div>

          {activeTab === "signin" ? (
            <SignInForm />
          ) : (
            <SignUpForm onSuccess={() => setActiveTab("signin")} />
          )}
        </div>
      </div>
    </div>
  );
}
