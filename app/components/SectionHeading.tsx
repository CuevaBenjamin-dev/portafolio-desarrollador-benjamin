export function SectionHeading({ id, number, eyebrow, title, lead }: { id: string; number: string; eyebrow: string; title: string; lead?: string }) {
  return (
    <div className="section-heading" data-reveal>
      <div className="section-heading__label"><span>{number} / {eyebrow}</span><span className="section-heading__line" /></div>
      <div className="section-heading__body"><h2 id={id}>{title}</h2>{lead && <p>{lead}</p>}</div>
    </div>
  );
}
