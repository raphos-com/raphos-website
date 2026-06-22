# Raphos components — source reference

These are the design-system React components. Each is self-contained (imports
React only) and styles itself from the `--rf-*` CSS custom properties, so just
link `styles.css` and use them. Lift these into your project as needed.


---

## Button  
<sub>`components/core/Button.jsx`</sub>

Solid blue call-to-action; use `variant="ghost"` for secondary actions sitting next to a primary, `withArrow` for "next / learn more" CTAs.

```jsx
<Button variant="primary" withArrow>What we do</Button>
<Button variant="ghost">See our work</Button>
```

Variants: `primary` (solid accent), `ghost` (bordered, transparent), `subtle` (soft fill). Sizes: `sm` · `md` · `lg`. Pass `href` to render as a link; `disabled` dims to 50%.

```jsx
import React from 'react';

/**
 * Raphos Button — the primary action element.
 * Self-contained: styling is driven by the design-system CSS custom
 * properties (link styles.css in the consuming page). Hover / press
 * states are handled with local state so no extra CSS is required.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  withArrow = false,
  disabled = false,
  href,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);

  const sizes = {
    sm: { padding: '0.5rem 0.9rem', fontSize: 'var(--fs-100)' },
    md: { padding: '0.7rem 1.25rem', fontSize: 'var(--fs-200)' },
    lg: { padding: '0.85rem 1.6rem', fontSize: 'var(--fs-300)' },
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--space-2)',
    fontFamily: 'var(--font-sans)',
    fontWeight: 550,
    letterSpacing: '0.01em',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    textDecoration: 'none',
    lineHeight: 1.1,
    transition: 'transform var(--dur-fast) var(--ease), background-color var(--dur-fast) var(--ease), border-color var(--dur-fast) var(--ease)',
    transform: !disabled && press ? 'translateY(0)' : !disabled && hover ? 'translateY(-1px)' : 'translateY(0)',
    ...sizes[size],
  };

  const variants = {
    primary: {
      background: hover && !disabled ? 'var(--rf-accent-press)' : 'var(--rf-accent)',
      color: '#fff',
    },
    ghost: {
      background: hover && !disabled ? 'var(--rf-accent-wash)' : 'transparent',
      color: 'var(--rf-ink)',
      borderColor: hover && !disabled ? 'var(--rf-ink-soft)' : 'var(--rf-line-strong)',
    },
    subtle: {
      background: hover && !disabled ? 'var(--rf-paper-sink)' : 'var(--rf-paper-alt)',
      color: 'var(--rf-ink)',
    },
  };

  const styleObj = { ...base, ...variants[variant], ...style };

  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => { setHover(false); setPress(false); },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onClick: disabled ? undefined : onClick,
  };

  const content = (
    <>
      {children}
      {withArrow && (
        <span style={{ transition: 'transform var(--dur-fast) var(--ease)', transform: hover && !disabled ? 'translateX(3px)' : 'none' }}>→</span>
      )}
    </>
  );

  if (href && !disabled) {
    return (
      <a href={href} style={styleObj} {...handlers} {...rest}>{content}</a>
    );
  }
  return (
    <button type={type} disabled={disabled} style={styleObj} {...handlers} {...rest}>{content}</button>
  );
}
```

---

## Tag  
<sub>`components/core/Tag.jsx`</sub>

Rounded pill for keywords, technologies and categories — the chips under project titles.

```jsx
<Tag>Dynamic relaxation</Tag>
<Tag variant="accent">Optimization</Tag>
```

Variants: `default` (hairline outline), `accent` (blue wash), `solid` (ink fill).

```jsx
import React from 'react';

/**
 * Tag — a pill chip for tech keywords / categories. Mirrors the site's
 * rounded "background" pills. Optional accent variant for emphasis.
 */
export function Tag({ children, variant = 'default', style, ...rest }) {
  const variants = {
    default: { color: 'var(--rf-ink-soft)', background: 'var(--rf-paper)', borderColor: 'var(--rf-line)' },
    accent: { color: 'var(--rf-accent)', background: 'var(--rf-accent-wash)', borderColor: 'var(--rf-accent-line)' },
    solid: { color: '#fff', background: 'var(--rf-ink)', borderColor: 'var(--rf-ink)' },
  };
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--fs-200)',
        lineHeight: 1.2,
        padding: '0.35rem 0.85rem',
        borderRadius: 'var(--radius-pill)',
        border: '1px solid',
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
```

---

## Eyebrow  
<sub>`components/core/Eyebrow.jsx`</sub>

The technical kicker label above headings, set in JetBrains Mono, uppercase, wide tracking.

```jsx
<Eyebrow>Capabilities</Eyebrow>
<Eyebrow tone="muted">Full breakdown</Eyebrow>
```

`tone="accent"` (blue, wide eyebrow tracking) for section kickers; `tone="muted"` (grey) for inline data / meta labels.

```jsx
import React from 'react';

/**
 * Eyebrow — the mono, uppercase, letter-spaced kicker above headings.
 * Accent-blue by default; pass tone="muted" for the grey data-label form.
 */
export function Eyebrow({ children, tone = 'accent', style, ...rest }) {
  return (
    <span
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--fs-100)',
        letterSpacing: tone === 'accent' ? 'var(--tracking-eyebrow)' : 'var(--tracking-mono)',
        textTransform: 'uppercase',
        fontWeight: 500,
        color: tone === 'accent' ? 'var(--rf-accent)' : 'var(--rf-muted)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
```

---

## Card  
<sub>`components/surfaces/Card.jsx`</sub>

The base surface for panels and content blocks — hairline border, soft 10px radius.

```jsx
<Card interactive>…</Card>
<Card tone="invert">Dark CTA card</Card>
```

`interactive` adds the −3px hover lift + soft shadow. `tone`: `default`, `alt` (sunken paper), `invert` (dark ink).

```jsx
import React from 'react';

/**
 * Card — the base surface: hairline border, soft radius, paper fill.
 * Set `interactive` to get the signature hover lift + shadow.
 * `tone="invert"` renders the dark ink card used for CTAs.
 */
export function Card({ children, interactive = false, tone = 'default', style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    default: { background: 'var(--rf-paper)', color: 'var(--rf-ink)', borderColor: 'var(--rf-line)' },
    alt: { background: 'var(--rf-paper-alt)', color: 'var(--rf-ink)', borderColor: 'var(--rf-line)' },
    invert: { background: 'var(--rf-dark)', color: 'var(--rf-ink-invert)', borderColor: 'var(--rf-dark-line)' },
  };
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: 'var(--space-5)',
        borderRadius: 'var(--radius)',
        border: '1px solid',
        transition: 'transform var(--dur-base) var(--ease), border-color var(--dur-base) var(--ease), box-shadow var(--dur-base) var(--ease)',
        ...tones[tone],
        ...(interactive && hover
          ? { transform: 'var(--lift)', borderColor: 'var(--rf-line-strong)', boxShadow: 'var(--shadow-md)' }
          : null),
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
```

---

## CapabilityCard  
<sub>`components/surfaces/CapabilityCard.jsx`</sub>

Numbered capability / feature card — mono index, title, body, optional "Learn more →".

```jsx
<CapabilityCard index="01" title="Automated FE Analysis">
  Bespoke software to automate complex finite-element analysis.
</CapabilityCard>
```

Pass `href` to make the whole card a link (adds hover lift + arrow).

```jsx
import React from 'react';

/**
 * CapabilityCard — numbered capability/feature card from the marketing site.
 * Mono index + title, body text, optional "Learn more →" when href is set.
 */
export function CapabilityCard({ index, title, href, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const isLink = Boolean(href);
  const Tag = isLink ? 'a' : 'div';
  return (
    <Tag
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 'var(--space-5)',
        background: 'var(--rf-paper)',
        border: '1px solid',
        borderColor: isLink && hover ? 'var(--rf-line-strong)' : 'var(--rf-line)',
        borderRadius: 'var(--radius)',
        height: '100%',
        color: 'inherit',
        textDecoration: 'none',
        transition: 'transform var(--dur-base) var(--ease), border-color var(--dur-base) var(--ease), box-shadow var(--dur-base) var(--ease)',
        transform: isLink && hover ? 'var(--lift)' : 'none',
        boxShadow: isLink && hover ? 'var(--shadow-md)' : 'none',
        ...style,
      }}
      {...rest}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-3)' }}>
        {index && (
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-100)', color: 'var(--rf-accent)', letterSpacing: '0.08em' }}>{index}</span>
        )}
        <h3 style={{ fontSize: 'var(--fs-400)', fontWeight: 620, letterSpacing: 'var(--tracking-display)', color: 'var(--rf-ink)', margin: 0, lineHeight: 1.15 }}>{title}</h3>
      </div>
      <p style={{ marginTop: 'var(--space-3)', color: 'var(--rf-ink-soft)', fontSize: 'var(--fs-200)', lineHeight: 1.6 }}>{children}</p>
      {isLink && (
        <span style={{ marginTop: 'auto', paddingTop: 'var(--space-4)', fontSize: 'var(--fs-200)', fontWeight: 540, color: 'var(--rf-accent)' }}>
          Learn more <span style={{ display: 'inline-block', transform: hover ? 'translateX(3px)' : 'none', transition: 'transform var(--dur-fast) var(--ease)' }}>→</span>
        </span>
      )}
    </Tag>
  );
}
```

---

## Stat  
<sub>`components/surfaces/Stat.jsx`</sub>

Big-figure stats for "at a glance" panels. Wrap several `<Stat>` in a `<StatList>` for the bordered ledger look.

```jsx
<StatList>
  <Stat value="2018" label="Founded in London" />
  <Stat value="660M+" label="Sensor data points analysed" />
</StatList>
```

```jsx
import React from 'react';

/**
 * Stat — a single big figure with a label, as used in the "at a glance"
 * list. Compose several inside a StatList for the bordered ledger look.
 */
export function Stat({ value, label, style, ...rest }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', ...style }} {...rest}>
      <span style={{ fontSize: 'var(--fs-500)', fontWeight: 680, letterSpacing: 'var(--tracking-display)', color: 'var(--rf-ink)', lineHeight: 1.1 }}>{value}</span>
      <span style={{ color: 'var(--rf-muted)', fontSize: 'var(--fs-200)', marginTop: 'var(--space-1)' }}>{label}</span>
    </div>
  );
}

/**
 * StatList — the bordered ledger of stats with a heavy top rule and
 * hairline dividers between rows.
 */
export function StatList({ children, style, ...rest }) {
  const items = React.Children.toArray(children);
  return (
    <ul
      style={{
        display: 'grid',
        gap: 'var(--space-4)',
        borderTop: '2px solid var(--rf-ink)',
        paddingTop: 'var(--space-5)',
        margin: 0,
        listStyle: 'none',
        ...style,
      }}
      {...rest}
    >
      {items.map((child, i) => (
        <li key={i} style={{ display: 'flex', flexDirection: 'column', paddingBottom: 'var(--space-4)', borderBottom: '1px solid var(--rf-line)' }}>
          {child}
        </li>
      ))}
    </ul>
  );
}
```

---

## Figure  
<sub>`components/surfaces/Figure.jsx`</sub>

Framed, captioned image. Hairline frame, soft radius, mono caption beneath.

```jsx
<Figure src="/img/work/capybara-remesh.png"
        caption="A surface remeshed to a quad-dominant mesh."
        ratio="16 / 9" />
```

Use `fit="contain"` for diagrams and logos, `fit="cover"` (default) for photos and screenshots.

```jsx
import React from 'react';

/**
 * Figure — a framed, captioned image. Hairline frame + soft radius,
 * mono caption beneath. Use fit="contain" for diagrams/logos.
 */
export function Figure({ src, caption, ratio = '16 / 9', fit = 'cover', loading = 'lazy', style, ...rest }) {
  return (
    <figure style={{ margin: 0, ...style }} {...rest}>
      <div style={{ width: '100%', aspectRatio: ratio, overflow: 'hidden', border: '1px solid var(--rf-line)', borderRadius: 'var(--radius)', background: 'var(--rf-paper-alt)' }}>
        <img
          src={src}
          alt={caption || ''}
          loading={loading}
          decoding="async"
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
            objectFit: fit,
            objectPosition: 'center top',
            padding: fit === 'contain' ? 'var(--space-4)' : 0,
          }}
        />
      </div>
      {caption && (
        <figcaption style={{ marginTop: 'var(--space-2)', fontSize: 'var(--fs-100)', color: 'var(--rf-muted)', lineHeight: 1.5 }}>{caption}</figcaption>
      )}
    </figure>
  );
}
```

---

## Input  
<sub>`components/forms/Input.jsx`</sub>

Form controls with the accent focus ring. Wrap with `<Field>` for a mono label + hint.

```jsx
<Field label="Email" hint="We read every message.">
  <Input type="email" placeholder="you@company.com" />
</Field>
<Field label="Message">
  <Textarea rows={5} />
</Field>
```

```jsx
import React from 'react';

/**
 * Field — label + input/control wrapper with optional hint and mono label.
 */
export function Field({ label, hint, children, style, ...rest }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', ...style }} {...rest}>
      {label && (
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-100)', letterSpacing: 'var(--tracking-mono)', textTransform: 'uppercase', color: 'var(--rf-muted)' }}>{label}</span>
      )}
      {children}
      {hint && <span style={{ fontSize: 'var(--fs-200)', color: 'var(--rf-muted)' }}>{hint}</span>}
    </label>
  );
}

const fieldBase = (focus) => ({
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--fs-200)',
  color: 'var(--rf-ink)',
  background: 'var(--rf-paper)',
  border: '1px solid',
  borderColor: focus ? 'var(--rf-accent)' : 'var(--rf-line-strong)',
  borderRadius: 'var(--radius-sm)',
  padding: '0.6rem 0.8rem',
  width: '100%',
  outline: 'none',
  boxShadow: focus ? 'var(--shadow-focus)' : 'none',
  transition: 'border-color var(--dur-fast) var(--ease), box-shadow var(--dur-fast) var(--ease)',
});

/** Single-line text input. */
export function Input({ style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <input
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={{ ...fieldBase(focus), ...style }}
      {...rest}
    />
  );
}

/** Multi-line text input. */
export function Textarea({ rows = 4, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <textarea
      rows={rows}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={{ ...fieldBase(focus), resize: 'vertical', lineHeight: 1.5, ...style }}
      {...rest}
    />
  );
}
```

---

## Logo  
<sub>`components/brand/Logo.jsx`</sub>

The Raphos dodo — the brand mark, alone or locked up with the wordmark.

```jsx
<Logo />                              {/* dodo + "Raphos" wordmark */}
<Logo variant="mark" size={32} />     {/* solid dodo only */}
<Logo symbol="node-dodo" variant="mark" /> {/* dodo outline + interpolated dots */}
<Logo mono />                         {/* inherits currentColor on dark bars */}
```

`symbol`: `solid` (default, filled silhouette) or `node-dodo` (expressive — outline + nodes). `variant`: `lockup` (default) or `mark`. `mono` renders everything in `currentColor` for inverted surfaces.

```jsx
import React from 'react';

// Heritage dodo silhouette (24×24 grid).
const DODO_PATH = "m 11.020432,19.067292 c 0.923785,-0.281408 1.848877,-0.563215 2.951918,-1.092504 1.103041,-0.52929 2.386049,-1.306497 3.395019,-2.1058 1.008969,-0.799304 1.744563,-1.621179 2.206318,-2.326331 0.461755,-0.705152 0.649929,-1.294758 0.61276,-1.718736 -0.03717,-0.423978 -0.302323,-0.683046 -0.866695,-1.080883 -0.564372,-0.397837 -1.428263,-0.933841 -1.831657,-1.4875262 -0.403394,-0.5536853 -0.34352,-1.1254251 0.02069,-1.5331086 0.364216,-0.4076836 1.031381,-0.648886 1.561757,-0.6346698 0.530377,0.014216 0.920141,0.2800491 1.312389,0.5475763 0.381234,0.1575452 0.765055,0.3161591 1.082929,0.2331322 C 21.78374,7.785415 22.041334,7.4622666 22.298681,7.1394273 21.165208,6.0544984 20.033976,4.9717141 19.402266,4.1525225 18.770556,3.3333308 18.642255,2.779459 18.305388,2.3767477 17.968521,1.9740364 17.421106,1.7239012 16.697875,1.6740268 c -0.72323,-0.049874 -1.621335,0.1019935 -2.272486,0.5402821 -0.651151,0.4382886 -1.05316,1.1618958 -1.189586,1.8997827 -0.136426,0.7378869 -0.0081,1.4882941 0.150399,2.1137213 0.158525,0.6254272 0.3467,1.1256984 -0.09337,1.4324892 C 12.852757,7.9670929 11.783582,8.0832275 10.911462,8.0346027 10.039341,7.9859779 9.3636237,7.7715759 8.9733962,7.4061587 8.5831688,7.0407414 8.4805282,6.5226035 8.6812297,5.9943035 8.8819312,5.4660035 9.3865813,4.9299983 9.4343484,4.7242602 9.4821156,4.5185222 9.0702188,4.6439965 8.6596477,4.7690669 7.7187557,5.0013405 6.7793501,5.2332471 5.7779164,5.7872505 4.7764827,6.341254 3.715862,7.2167291 3.0826483,8.2227305 2.4494345,9.228732 2.2441531,10.363276 2.2059675,11.47585 c -0.038186,1.112573 0.090115,2.20245 0.4714965,3.189641 0.3813813,0.98719 1.0143326,1.871599 1.7631876,2.527629 0.748855,0.65603 1.6101592,1.083549 2.4740692,1.512361 0,0 0.4362314,2.586278 0.4362314,2.586278 0,0 2.181159,1.112231 2.181159,1.112231 0,0 3.9600688,-0.0483 3.9600688,-0.0483 -0.601524,-0.510981 -1.20051,-1.019806 -1.613237,-1.567634 -0.412726,-0.547828 -0.636119,-1.135612 -0.858511,-1.720763 z";
const DODO_NODES = [[16.70, 1.67], [22.30, 7.14], [20.19, 11.82], [9.43, 4.72], [2.21, 11.48], [11.02, 19.07]];

/**
 * Logo — the Raphos dodo. `symbol="solid"` (default) is the filled heritage
 * silhouette; `symbol="node-dodo"` is the expressive variant — the dodo
 * outline with interpolated nodes on its contour. Optionally locked up with
 * the wordmark. `mono` renders everything in currentColor for dark bars.
 */
export function Logo({ variant = 'lockup', symbol = 'solid', size = 28, mono = false, color, style, ...rest }) {
  const node = mono ? 'currentColor' : 'var(--rf-accent)';
  const fill = mono ? 'currentColor' : (color || 'var(--rf-accent)');
  let mark;
  if (symbol === 'node-dodo') {
    mark = (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true" style={{ flex: 'none' }}>
        <path d={DODO_PATH} stroke={mono ? 'currentColor' : (color || 'var(--rf-ink)')} strokeWidth="0.9" strokeLinejoin="round" />
        <g fill={node}>{DODO_NODES.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="1.15" />)}</g>
      </svg>
    );
  } else {
    mark = (
      <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" style={{ flex: 'none' }}>
        <path d={DODO_PATH} fill={fill} />
      </svg>
    );
  }
  if (variant === 'mark') {
    return <span style={style} {...rest}>{mark}</span>;
  }
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', ...style }} {...rest}>
      {mark}
      <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 680, letterSpacing: 'var(--tracking-display)', fontSize: size * 0.62, color: mono ? 'currentColor' : 'var(--rf-ink)', lineHeight: 1 }}>Raphos</span>
    </span>
  );
}
```
