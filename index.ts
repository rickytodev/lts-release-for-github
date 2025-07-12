import { JSDOM } from "jsdom";

export default async function fetchReleases(
  creator: string,
  repository: string
): Promise<string> {
  const url = `https://github.com/${creator}/${repository}/releases`;

  const headers = {
    Accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Accept-Encoding": "gzip, deflate, br, zstd",
  };

  const response = await fetch(url, {
    method: "GET",
    headers,
  });

  const textHTML = await response.text();
  const dom = new JSDOM(textHTML);
  const document = dom.window.document;

  const latestRelease = document.getElementById(
    "repo-content-pjax-container"
  ) as HTMLElement;

  const sectionContainer = latestRelease.querySelector(
    "section"
  ) as HTMLElement;
  const containerRelease = sectionContainer.querySelector(
    "span"
  ) as HTMLElement;

  let release: string = containerRelease.textContent?.trim() || "";

  return release.includes("v") ? release.slice(1) : release;
}
