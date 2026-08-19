// Adds a copy-to-clipboard button and a language badge to every rendered
// code block, replacing components/content/ProseCode.vue's behaviour.
// Astro's built-in Shiki renderer already tags each <pre> with
// data-language, so no custom markdown component is needed.

interface LanguageStyle {
  text: string;
  background: string;
  color: string;
}

const languageMap: Record<string, LanguageStyle> = {
  vue: { text: 'vue', background: '#42b883', color: 'white' },
  js: { text: 'js', background: '#f7df1e', color: 'white' },
  javascript: { text: 'js', background: '#f7df1e', color: 'white' },
  shell: { text: '>_', background: '#ffffff', color: 'black' },
  bash: { text: '>_', background: '#ffffff', color: 'black' },
};

function addLanguageBadge(pre: HTMLPreElement) {
  const language = pre.dataset.language;
  const style = language ? languageMap[language] : undefined;
  if (!style) return;

  const badge = document.createElement('span');
  badge.className = 'code-language-badge';
  badge.textContent = style.text;
  badge.style.backgroundColor = style.background;
  badge.style.color = style.color;
  pre.appendChild(badge);
}

function addCopyButton(pre: HTMLPreElement) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'code-copy-button';
  button.textContent = 'Copiar';

  button.addEventListener('click', async () => {
    const code = pre.querySelector('code')?.textContent ?? '';
    await navigator.clipboard.writeText(code);
    const original = button.textContent;
    button.textContent = 'Copiado!';
    setTimeout(() => {
      button.textContent = original;
    }, 1500);
  });

  pre.appendChild(button);
}

document.querySelectorAll<HTMLPreElement>('.article-body pre.astro-code').forEach((pre) => {
  addLanguageBadge(pre);
  addCopyButton(pre);
});
