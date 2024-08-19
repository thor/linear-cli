/// <reference path="../index.d.ts"/>

import { Marked } from 'marked';
import { markedTerminal } from 'marked-terminal';
import terminalLink from 'terminal-link';
import wrapAnsi from 'wrap-ansi';

/**
 * Reads markdown and renders it for the terminal
 */

const MAX_WIDTH = 90;

let imageCounter = 1;

const rendererOptions = {
  async: false,
  reflowText: true,
  width: MAX_WIDTH,
  link: (href: string) => {
    /* Remove email links */
    if (href.match(/@/)) {
      return href.split(' ')[0];
    }
    return href;
  },
  image: (href: string, title: string) => {
    const linkId = imageCounter++;
    const mediaType = href.match(/[.png|.jpg]$/) ? 'IMAGE' : 'MEDIA';
    /* Print at the end */
    setTimeout(() => {
      global.log(`\n[${linkId}] ${terminalLink(title, href)}`);
    }, 0);

    return `[${mediaType}][${linkId}] ${title}`;
  },
};

const marked = new Marked();
marked.use(markedTerminal(rendererOptions));

export const Markdown = (markdown: string) => {
  let result = marked.parse(markdown);
  if (!(typeof result === 'string')) {
    throw Error("Somethings gone awry as we have a promise instead");
  }
  result = result.replace(/\*/g, () => `•`);
  return wrapAnsi(result, 90);
};
