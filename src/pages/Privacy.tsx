import { useEffect } from "react";
import { Link } from "react-router-dom";

const sections = [
  {
    id: "who-we-are",
    heading: "Who we are",
    content: (
      <p>
        Synapso is a cognitive training application designed to help users
        improve memory, attention, focus, and mental flexibility through
        interactive brain games. To provide a personalised experience, Synapso
        requires a user account. This policy explains what personal data we
        collect in connection with that account and how we handle it.
      </p>
    ),
  },
  {
    id: "what-we-collect",
    heading: "What data we collect",
    content: (
      <>
        <p>When you create and use a Synapso account, we collect:</p>
        <ul>
          <li>Email address</li>
          <li>Username / nickname</li>
          <li>Year of birth</li>
          <li>
            Account-related data (e.g. account creation date, login history)
          </li>
          <li>
            Gameplay statistics and activity generated while using the app (e.g.
            scores, session durations, training history)
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "why-we-collect",
    heading: "Why we collect this data",
    content: (
      <>
        <p>We use the data we collect to:</p>
        <ul>
          <li>Create and manage your account</li>
          <li>Authenticate you and enable password recovery</li>
          <li>Save and restore your training progress</li>
          <li>Display your profile and leaderboard information</li>
          <li>Generate personalised gameplay statistics</li>
          <li>Maintain the security and reliability of the application</li>
          <li>Improve the overall app experience over time</li>
        </ul>
      </>
    ),
  },
  {
    id: "legal-basis",
    heading: "Legal basis",
    content: (
      <p>
        Your personal data is processed primarily on the basis of providing you
        with the Synapso service and managing your user account. By creating an
        account, you agree to the processing of your data as described in this
        policy.
      </p>
    ),
  },
  {
    id: "how-stored",
    heading: "How data is stored",
    content: (
      <p>
        Your data is stored securely using external infrastructure and backend
        services required to operate the application. We take reasonable
        technical measures to protect your information against unauthorised
        access, loss, or misuse.
      </p>
    ),
  },
  {
    id: "how-long",
    heading: "How long data is kept",
    content: (
      <p>
        Personal data is retained for as long as your account exists, or as long
        as necessary for the legitimate operation of the service. If you request
        deletion of your account, we will remove your personal data unless a
        longer retention period is required by applicable law.
      </p>
    ),
  },
  {
    id: "sharing",
    heading: "Sharing of data",
    content: (
      <p>
        We do not sell your personal data. Data is only shared with third-party
        service providers that are strictly necessary for operating the app and
        its supporting infrastructure. These providers are bound to handle your
        data responsibly and only for the purposes we specify.
      </p>
    ),
  },
  {
    id: "user-rights",
    heading: "Your rights",
    content: (
      <p>
        Depending on the law applicable to you, you may have the right to
        request access to, correction of, deletion of, or a restriction on the
        processing of your personal data. To exercise any of these rights,
        please contact us using the details below.
      </p>
    ),
  },
  {
    id: "contact",
    heading: "Contact",
    content: (
      <p>
        If you have any questions or requests regarding your personal data,
        please reach out to us at{" "}
        <a
          href="mailto:support@synapso.world"
          className="text-primary hover:underline underline-offset-4"
        >
          support@synapso.world
        </a>
        .
      </p>
    ),
  },
  {
    id: "updates",
    heading: "Updates to this policy",
    content: (
      <p>
        This privacy policy may be updated from time to time to reflect changes
        in our practices or applicable law. The latest version will always be
        available on this page. We encourage you to review it periodically.
      </p>
    ),
  },
];

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy Policy — Synapso";
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Subtle static background glow */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute w-[600px] h-[600px] rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{
            left: "70%",
            top: "20%",
            background:
              "radial-gradient(circle, hsl(166 50% 37% / 0.18) 0%, hsl(166 50% 37% / 0.06) 45%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{
            left: "15%",
            top: "60%",
            background:
              "radial-gradient(circle, hsl(166 50% 37% / 0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Main content */}
      <main className="relative z-10 max-w-3xl mx-auto px-6 py-16 md:py-24">
        {/* Page header */}
        <div className="mb-14">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-5">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-lg md:text-2xl leading-relaxed mb-7">
            How we collect, use, and protect your personal data in Synapso
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-block text-sm font-medium text-muted-foreground border border-border rounded-full px-4 py-1.5">
              Last updated: March 29, 2026
            </span>
            <Link
              to="/zasady-ochrany-osobnych-udajov"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary border border-primary/30 rounded-full px-4 py-1.5 hover:bg-primary/10 transition-colors"
            >
              🇸🇰 Slovensky
            </Link>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className="glass rounded-2xl px-8 py-8"
            >
              <div className="flex items-start gap-6">
                <span className="mt-1 shrink-0 text-base font-semibold text-primary/70 w-7 text-right tabular-nums select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    {section.heading}
                  </h2>
                  <div className="text-muted-foreground text-lg leading-relaxed space-y-4 [&_ul]:mt-2 [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:list-disc [&_ul]:marker:text-primary/50">
                    {section.content}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-8 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-4">
          <p className="text-muted-foreground text-sm">© 2026 Synapso</p>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
