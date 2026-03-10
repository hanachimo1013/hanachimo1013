import React, { useState } from 'react';

export default function HanachimoProfile() {
  const [avatarError, setAvatarError] = useState(false);

  return (
    <div className="min-h-screen bg-[#0c0f16] text-white">
      <section className="relative overflow-hidden">
        <div
          className="h-64 w-full border-b border-white/10"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.6)), url('/hanachimo-banner.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="mx-auto w-full max-w-5xl px-6">
          <div className="-mt-16 flex flex-col items-start gap-6 md:flex-row md:items-end">
            <div className="relative h-32 w-32 rounded-full border-4 border-[#0c0f16] bg-gradient-to-br from-rose-500 via-orange-400 to-amber-300 p-1 shadow-xl">
              {!avatarError && (
                <img
                  src="/hanachimo-avatar.png"
                  alt="hanachimo avatar"
                  className="h-full w-full rounded-full object-cover"
                  onError={() => setAvatarError(true)}
                />
              )}
              {avatarError && (
                <div className="flex h-full w-full items-center justify-center rounded-full bg-black/40 text-2xl font-black">
                  h.
                </div>
              )}
            </div>

            <div className="pb-4">
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-black">hanachimo</h1>
                <span className="inline-flex items-center rounded-full bg-sky-500/20 px-2 py-1 text-xs font-semibold text-sky-200">
                  verified
                </span>
              </div>
              <p className="text-sm text-white/60">@hanachimo1013</p>
              <p className="mt-3 text-base text-white/80">hanachimoです。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 pb-16 pt-8">
        <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-lg font-semibold text-white/90">Links</h2>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="https://github.com/hanachimo1013"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold transition hover:border-white/30 hover:bg-white/10"
              >
                GitHub
                <span className="text-white/60">github.com/hanachimo1013</span>
              </a>
              <a
                href="https://tiktok.com/@hanachimo1013"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold transition hover:border-white/30 hover:bg-white/10"
              >
                TikTok
                <span className="text-white/60">@hanachimo1013</span>
              </a>
              <a
                href="https://x.com/hanachimo1013"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold transition hover:border-white/30 hover:bg-white/10"
              >
                X
                <span className="text-white/60">@hanachimo1013</span>
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-lg font-semibold text-white/90">Profile</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <dt className="text-white/60">Location</dt>
                <dd className="font-semibold">フィリピン</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-white/60">Born</dt>
                <dd className="font-semibold">October 13, 1999</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-white/60">Joined</dt>
                <dd className="font-semibold">January 2020</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-white/60">Posts</dt>
                <dd className="font-semibold">94</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-white/60">Followers</dt>
                <dd className="font-semibold">5</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-white/60">Following</dt>
                <dd className="font-semibold">46</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
