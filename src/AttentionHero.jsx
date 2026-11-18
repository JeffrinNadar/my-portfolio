import { useMemo, useState } from 'react';

// The headline, split into tokens. Each token belongs to a semantic group;
// the attention weights below are derived from those groups so that hovering
// a word lights up the words it is plausibly "about".
const TOKENS = [
  ['Jeffrin', 'who'], ['builds', 'act'], ['systems', 'sys'], ['that', 'fn'],
  ['solve', 'act'], ['real', 'prob'], ['world', 'prob'], ['problems', 'prob'],
];

const RELATED = {
  'who|act': 1.7, 'act|sys': 1.5, 'act|prob': 1.4, 'sys|prob': 1.2, 'who|sys': 0.9,
};

function relatedScore(a, b) {
  return RELATED[`${a}|${b}`] ?? RELATED[`${b}|${a}`] ?? 0;
}

function buildAttention() {
  return TOKENS.map(([, gi], i) => {
    const scores = TOKENS.map(([, gj], j) => {
      let s = 0;
      if (i === j) s += 2.4;
      else if (gi === gj && gi !== 'fn') s += 2.2;
      s += relatedScore(gi, gj);
      if (Math.abs(i - j) === 1) s += gi === 'fn' ? 1.8 : 0.7;
      return s;
    });
    const exps = scores.map((s) => Math.exp(s * 1.3));
    const sum = exps.reduce((a, b) => a + b, 0);
    return exps.map((e) => e / sum);
  });
}

const VIRIDIS = ['#440154', '#482878', '#3e4a89', '#31688e', '#26828e', '#1f9e89', '#35b779', '#6dcd59', '#b4de2c', '#fde725'];

function viridis(t) {
  const x = Math.min(1, Math.max(0, t)) * (VIRIDIS.length - 1);
  const i = Math.floor(x);
  if (i >= VIRIDIS.length - 1) return VIRIDIS[VIRIDIS.length - 1];
  const f = x - i;
  const a = parseInt(VIRIDIS[i].slice(1), 16);
  const b = parseInt(VIRIDIS[i + 1].slice(1), 16);
  const ch = (shift) => Math.round(((a >> shift) & 255) * (1 - f) + ((b >> shift) & 255) * f);
  return `rgb(${ch(16)}, ${ch(8)}, ${ch(0)})`;
}

export default function AttentionHero() {
  const attn = useMemo(buildAttention, []);
  const max = useMemo(() => Math.max(...attn.flat()), [attn]);
  const [active, setActive] = useState(null);
  const n = TOKENS.length;

  const rowMax = active === null ? 1 : Math.max(...attn[active]);

  return (
    <div className="hero__grid">
      <h1 className="hero__headline" onMouseLeave={() => setActive(null)}>
        {TOKENS.map(([word], i) => {
          const w = active === null ? 0 : attn[active][i] / rowMax;
          const isActive = active === i;
          return (
            <span key={i}>
              <span
                className={`token${isActive ? ' token--active' : ''}`}
                tabIndex={0}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                onBlur={() => setActive(null)}
                style={active !== null && !isActive ? { '--w': w.toFixed(3), '--c': `color-mix(in srgb, ${viridis(w)} ${Math.round(Math.min(1, w * 1.6) * 100)}%, transparent)` } : undefined}
              >
                {word}
              </span>{' '}
            </span>
          );
        })}
      </h1>

      <figure className="matrix">
        <div
          className="matrix__grid"
          style={{ gridTemplateColumns: `repeat(${n}, 1fr)` }}
          role="img"
          aria-label="Attention heatmap between the words of the headline"
          onMouseLeave={() => setActive(null)}
        >
          {attn.map((row, i) =>
            row.map((v, j) => (
              <span
                key={`${i}-${j}`}
                className={`matrix__cell${active === i ? ' matrix__cell--row' : ''}${active !== null && active !== i ? ' matrix__cell--dim' : ''}`}
                style={{ background: viridis(Math.pow(v / max, 0.6)), '--d': `${(i + j) * 22}ms` }}
                onMouseEnter={() => setActive(i)}
              />
            ))
          )}
        </div>
        <figcaption className="matrix__caption">
          {active === null ? (
            <>An attention map of the sentence above. Hover or tap a word to see what it focuses on.</>
          ) : (
            <>
              <strong>{TOKENS[active][0].replace(/[.,]/g, '')}</strong> focuses most on{' '}
              {attn[active]
                .map((v, j) => [v, j])
                .filter(([, j]) => j !== active)
                .sort((a, b) => b[0] - a[0])
                .slice(0, 2)
                .map(([, j]) => `“${TOKENS[j][0].replace(/[.,]/g, '')}”`)
                .join(' and ')}
              .
            </>
          )}
        </figcaption>
      </figure>
    </div>
  );
}
