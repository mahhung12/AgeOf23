import { Highlight } from "prism-react-renderer";

export const Code = ({
  children,
  language = "jsx",
}: {
  children: string;
  language?: string;
}) => (
  <Highlight code={children} language={language} theme={undefined}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={`${className} p-5 rounded-lg`} style={style}>
        {tokens.map((line, i) => (
          <div key={i} {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span key={key} {...getTokenProps({ token })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
);
