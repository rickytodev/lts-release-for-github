import { describe, expect, it } from "bun:test";
import fetchReleases from "../index";
import releasesTest from "./releases.test.json";

const [correctly, incorrect] = releasesTest;

const correctlyList = correctly as Array<string[]>;
const incorrectlyList = incorrect as Array<string[]>;

describe("Checar la última versión de paquetes (GitHub)", () => {
  it.each(correctlyList)(
    'Debe verificar el repositorio "github.com/%s/%s" con versión %s sea correcto',
    async (creator, repository, result) => {
      const latestRelease = await fetchReleases(creator, repository);
      expect(latestRelease).toBe(result);
    }
  );

  it.each(incorrectlyList)(
    'Debe verificar el repositorio "github.com/%s/%s" con versión %s sea incorrecto',
    async (creator, repository, result) => {
      const latestRelease = await fetchReleases(creator, repository);
      expect(latestRelease).toBe(result);
    }
  );
});
