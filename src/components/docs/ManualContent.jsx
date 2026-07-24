export const slugify = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const Block = ({ block }) => {
  switch (block.type) {
    case "h3":
      return (
        <h3 className="font-semibold text-ink text-[16px] mt-6 mb-2">
          {block.text}
        </h3>
      );
    case "strong":
      return (
        <p className="font-semibold text-ink text-[15px] leading-relaxed mb-4">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul className="mb-4 space-y-2">
          {block.items.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-muted text-[15px] leading-relaxed"
            >
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="mb-4 space-y-2.5">
          {block.items.map((item, idx) => (
            <li
              key={item}
              className="flex gap-3 text-muted text-[15px] leading-relaxed"
            >
              <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-primaryLight text-primary text-[11px] font-bold flex items-center justify-center">
                {idx + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div className="mb-4 overflow-x-auto rounded-2xl border border-line">
          <table className="w-full text-left border-collapse">
            {block.headers.length > 1 && (
              <thead>
                <tr className="bg-[#FAFBFA]">
                  {block.headers.map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-[13px] font-semibold text-ink border-b border-line whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-b border-line last:border-b-0">
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className="px-4 py-3 text-[14px] text-muted leading-relaxed align-top"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "note":
      return (
        <div className="mb-4 rounded-2xl border border-primary/25 bg-primaryLight px-5 py-4">
          <p className="text-ink text-[14px] leading-relaxed">
            <span className="font-semibold">Note: </span>
            <span className="italic">{block.text}</span>
          </p>
        </div>
      );
    case "card":
      return (
        <div className="mb-4 rounded-2xl border border-line bg-[#FAFBFA] p-6">
          {block.lines.map((line) => (
            <p key={line} className="text-ink text-[15px] leading-relaxed">
              {line}
            </p>
          ))}
        </div>
      );
    case "p":
    default:
      return (
        <p className="text-muted text-[15px] leading-relaxed mb-4">
          {block.text}
        </p>
      );
  }
};

const ManualSections = ({ sections }) => (
  <div className="min-w-0">
    {sections.map((section, i) => (
      <section
        key={section.title}
        id={slugify(section.title)}
        className="scroll-mt-28 pb-10 mb-10 border-b border-line last:border-b-0 last:mb-0 last:pb-0"
      >
        <h2 className="text-[20px] sm:text-[22px] font-bold text-secondary mb-4">
          {i + 1}. {section.title}
        </h2>
        {section.blocks.map((block, j) => (
          <Block key={j} block={block} />
        ))}
      </section>
    ))}
  </div>
);

export default ManualSections;
