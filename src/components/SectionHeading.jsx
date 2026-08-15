const SectionHeading = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : ''}`}>
      {subtitle && (
        <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm">
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl ${subtitle ? 'mt-2' : ''}`}>
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
