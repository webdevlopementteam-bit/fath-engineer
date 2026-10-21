import Link from "next/link";

export default function DescriptionRenderer({ blocks = [] }) {
  if (!Array.isArray(blocks) || blocks.length === 0) return null;

  return (
    <div className="space-y-7 text-[16px] leading-7 text-gray-700 sm:space-y-8 sm:text-[17px] sm:leading-8">
      {blocks.map((block, idx) => {
        if (!block) return null;

        if (block.type === "h2" && block.content) {
          return (
            <h2
              key={idx}
              className="pt-4 text-2xl font-bold leading-tight tracking-tight text-gray-900 sm:text-3xl lg:text-4xl"
            >
              {block.content}
            </h2>
          );
        }

        if (block.type === "h3" && block.content) {
          return (
            <h3
              key={idx}
              className="pt-2 text-xl font-semibold leading-snug text-gray-900 sm:text-2xl"
            >
              {block.content}
            </h3>
          );
        }

        if (block.type === "p") {
          return (
            <p
              key={idx}
              className="text-[16px] leading-7 text-gray-700 sm:text-[17px] sm:leading-8"
            >
              {Array.isArray(block.segments) && block.segments.length > 0
                ? block.segments.map((seg, i) =>
                    seg?.type === "link" ? (
                      <Link
                        key={i}
                        href={seg.href || "#"}
                        className="font-semibold text-red-700 no-underline transition-colors hover:text-red-800 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                      >
                        {seg.text || ""}
                      </Link>
                    ) : (
                      <span
                        key={i}
                        className={seg?.bold ? "font-semibold text-gray-900" : ""}
                      >
                        {seg?.text || ""}
                      </span>
                    ),
                  )
                : block.content || block.text || null}
            </p>
          );
        }

        if (
          block.type === "list" &&
          Array.isArray(block.items) &&
          block.items.length > 0
        ) {
          const ListTag = block.ordered ? "ol" : "ul";

          return (
            <ListTag
              key={idx}
              className={`space-y-3 pl-6 text-[16px] leading-7 text-gray-700 sm:space-y-3.5 sm:text-[17px] sm:leading-8 ${
                block.ordered ? "list-decimal" : "list-disc"
              }`}
            >
              {block.items.map((item, i) => (
                <li
                  key={i}
                  className="ps-1 marker:font-semibold marker:text-red-600"
                  dangerouslySetInnerHTML={{ __html: item || "" }}
                />
              ))}
            </ListTag>
          );
        }

        if (
          block.type === "table" &&
          Array.isArray(block.rows) &&
          block.rows.length > 0
        ) {
          return (
            <div
              key={idx}
              className="my-5 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <table className="w-full min-w-[520px] text-left text-sm text-gray-700 sm:text-base">
                {Array.isArray(block.headers) && block.headers.length > 0 && (
                  <thead className="bg-gray-100 text-xs font-bold uppercase tracking-wide text-gray-700 sm:text-sm">
                    <tr>
                      {block.headers.map((header, i) => (
                        <th key={i} className="px-4 py-3.5 sm:px-5">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                )}

                <tbody className="divide-y divide-gray-100">
                  {block.rows.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className="transition-colors hover:bg-red-50/40"
                    >
                      {Array.isArray(row) &&
                        row.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            className="px-4 py-3.5 leading-relaxed sm:px-5 sm:py-4"
                          >
                            {cell ?? "—"}
                          </td>
                        ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        if (
          block.type === "faq" &&
          Array.isArray(block.items) &&
          block.items.length > 0
        ) {
          return (
            <div key={idx} className="space-y-3 pt-2 sm:space-y-4">
              {block.items.map((faq, fIdx) => (
                <div
                  key={fIdx}
                  className="rounded-2xl border border-gray-200 bg-gray-50/70 p-4 sm:p-5"
                >
                  <h4 className="text-base font-semibold leading-snug text-gray-900 sm:text-lg">
                    {faq?.question || "Question"}
                  </h4>

                  <p className="mt-2 text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-7">
                    {faq?.answer || "Answer not available."}
                  </p>
                </div>
              ))}
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}