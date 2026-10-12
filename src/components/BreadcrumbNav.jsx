export default function BreadcrumbNav({ items }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb breadcrumb-dark bg-dark rounded px-4 py-3 mb-4">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li
              key={item}
              className={`breadcrumb-item${isLast ? " active fw-bold" : ""}`}
              aria-current={isLast ? "page" : undefined}
            >
              {isLast ? item : <a href="#">{item}</a>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
