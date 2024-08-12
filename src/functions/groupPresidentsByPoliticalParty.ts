import { President } from '../model/president';

interface PartyCount {
  party: string;
  count: number;
}

export async function groupPresidentsByPoliticalParty(
  presidents: President[]
): Promise<PartyCount[]> {
  const partyCounts: Record<string, number> = {};
  presidents.forEach((president) => {
    if (partyCounts[president.politicalParty]) {
      partyCounts[president.politicalParty]++;
    } else {
      partyCounts[president.politicalParty] = 1;
    }
  });

  return Object.keys(partyCounts)
    .map((party) => ({
      party: party,
      count: partyCounts[party],
    }))
    .sort((a, b) => b.count - a.count);
}
