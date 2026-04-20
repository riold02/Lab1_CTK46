import Link from "next/link";
import type { Country } from "@/types/country";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

async function getCountries(): Promise<Country[]> {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,cca3,flag,region,population,capital",
    { next: { revalidate: 300 } }
  );

  if (!res.ok) {
    throw new Error("Không thể tải danh sách quốc gia");
  }

  const data = (await res.json()) as Country[];
  return data.sort((a, b) => a.name.common.localeCompare(b.name.common, "vi"));
}

export default async function CountriesPage() {
  const countries = await getCountries();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Danh sách quốc gia</h1>
      <p className="text-zinc-500 mb-8">
        Dữ liệu từ REST Countries API ({countries.length} quốc gia)
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {countries.map((country) => (
          <Link key={country.cca3} href={`/countries/${country.cca3}`}>
            <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-full h-36 rounded-md border flex items-center justify-center text-7xl bg-zinc-50 dark:bg-zinc-900">
                  <span aria-hidden>{country.flag ?? "🏳️"}</span>
                </div>
                <CardTitle className="mt-3">{country.name.common}</CardTitle>
                <CardDescription>{country.name.official}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                <Badge variant="secondary">{country.region}</Badge>
                <p>Thủ đô: {country.capital?.join(", ") || "N/A"}</p>
                <p>Dân số: {country.population.toLocaleString("vi-VN")}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
