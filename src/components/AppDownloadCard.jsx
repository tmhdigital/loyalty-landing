import { QRCodeSVG } from "qrcode.react";
import { GooglePlayIcon, AppleIcon } from "./icons";
import Reveal from "./Reveal";

const StoreButton = ({ href, dark, kind, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-left transition-colors ${
      dark
        ? "bg-white text-secondary hover:bg-primaryLight"
        : "bg-secondary text-white hover:bg-black"
    }`}
  >
    {kind === "android" ? <GooglePlayIcon /> : <AppleIcon />}
    <span className="leading-tight">
      <span className="block text-[9.5px] uppercase tracking-wide opacity-70">
        {kind === "android" ? "Get it on" : "Download on the"}
      </span>
      <span className="block text-[13.5px] font-semibold -mt-0.5">
        {kind === "android" ? "Google Play" : "App Store"}
      </span>
    </span>
  </a>
);

const QrTile = ({ value, label }) => (
  <div className="flex flex-col items-center gap-1.5">
    <div className="p-1.5 rounded-lg bg-white border border-line">
      <QRCodeSVG
        value={value}
        size={56}
        bgColor="#ffffff"
        fgColor="#181818"
        role="img"
        aria-label={`QR code to ${label.text.replace("Scan · ", "download for ")}`}
      />
    </div>
    <span
      className={`text-[10.5px] font-medium ${
        label.dark ? "text-white/60" : "text-muted"
      }`}
    >
      {label.text}
    </span>
  </div>
);

const AppDownloadCard = ({
  icon,
  iconAlt,
  eyebrow,
  name,
  badge,
  description,
  features,
  links,
  screen,
  dark = false,
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl p-8 lg:p-10 transition-shadow hover:shadow-card ${
        dark ? "bg-secondary text-white" : "border border-line"
      }`}
    >
      <div className="grid md:grid-cols-[1fr_auto] gap-10 items-center">
        <div>
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <img
                src={icon}
                alt={iconAlt}
                width={56}
                height={56}
                className="w-14 h-14 rounded-2xl object-contain shrink-0"
              />
              <div>
                <p
                  className={`text-[13px] font-semibold uppercase tracking-wide ${
                    dark ? "text-primary" : "text-primary"
                  }`}
                >
                  {eyebrow}
                </p>
                <h3 className={`text-[22px] font-bold ${dark ? "text-white" : "text-secondary"}`}>
                  {name}
                </h3>
              </div>
            </div>

            {badge && (
              <span
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-pill text-[12.5px] font-semibold mb-5 ${
                  dark ? "bg-white/10 text-primary" : "bg-primaryLight text-primaryDark"
                }`}
              >
                {badge}
              </span>
            )}

            <p className={`text-[15px] leading-relaxed mb-7 ${dark ? "text-white/70" : "text-muted"}`}>
              {description}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 mb-8">
              {features.map(({ icon: FeatureIcon, label }) => (
                <li key={label} className="flex items-start gap-2.5 text-[13.5px]">
                  <span
                    className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center [&_svg]:w-4 [&_svg]:h-4 ${
                      dark ? "bg-white/10 text-primary" : "bg-primaryLight text-primary"
                    }`}
                  >
                    <FeatureIcon />
                  </span>
                  <span className={dark ? "text-white/80 pt-1" : "text-ink/80 pt-1"}>{label}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={140}>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex flex-wrap gap-3">
                <StoreButton
                  href={links.android}
                  dark={dark}
                  kind="android"
                  label={`Download ${name} for Android on Google Play`}
                />
                <StoreButton
                  href={links.ios}
                  dark={dark}
                  kind="ios"
                  label={`Download ${name} for iOS on the App Store`}
                />
              </div>
              <div className="flex gap-4 pl-1">
                <QrTile value={links.android} label={{ text: "Scan · Android", dark }} />
                <QrTile value={links.ios} label={{ text: "Scan · iOS", dark }} />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={100} className="justify-self-center">
          {screen}
        </Reveal>
      </div>
    </div>
  );
};

export default AppDownloadCard;
