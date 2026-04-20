import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Country } from "@/types/country";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CountryDetailPageProps {
  params: Promise<{ code: string }>;
}

async function getCountry(code: string): Promise<Country | null> {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${code}?fields=name,cca3,region,subregion,population,capital,flags,languages,currencies,area,timezones`,
    { next: { revalidate: 300 } }
  );

  if (!res.ok) {
    return null;
  }

  const data = (await res.json()) as Country[] | Country;
  if (Array.isArray(data)) {
    return data[0] ?? null;
  }

  return data ?? null;
}

export default async function CountryDetailPage({ params }: CountryDetailPageProps) {
  const { code } = await params;
  const country = await getCountry(code);

  if (!country) {
    notFound();
  }

  const currencies = country.currencies
    ? Object.values(country.currencies).map((item) => `${item.name}${item.symbol ? ` (${item.symbol})` : ""}`)
    : [];
  const languages = country.languages ? Object.values(country.languages) : [];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/countries">
        <Button variant="link" className="px-0">
          ← Quay lại danh sách quốc gia
        </Button>
      </Link>

      <Card className="mt-4">
        <CardHeader>
          <Image
            src={country.flags.png || country.flags.svg}
            alt={country.flags.alt || `Cờ ${country.name.common}`}
            width={800}
            height={420}
            className="w-full h-56 object-cover rounded-md border"
          />
          <div className="flex flex-wrap items-center gap-2 mt-4">
            <CardTitle className="text-3xl">{country.name.common}</CardTitle>
            <Badge variant="secondary">{country.cca3}</Badge>
            <Badge variant="outline">{country.region}</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-2 text-zinc-700 dark:text-zinc-300">
          <p>
            <strong>Tên chính thức:</strong> {country.name.official}
          </p>
          <p>
            <strong>Thủ đô:</strong> {country.capital?.join(", ") || "N/A"}
          </p>
          <p>
            <strong>Khu vực:</strong> {country.region}
            {country.subregion ? ` / ${country.subregion}` : ""}
          </p>
          <p>
            <strong>Dân số:</strong> {country.population.toLocaleString("vi-VN")}
          </p>
          <p>
            <strong>Diện tích:</strong> {country.area.toLocaleString("vi-VN")} km²
          </p>
          <p>
            <strong>Ngôn ngữ:</strong> {languages.length ? languages.join(", ") : "N/A"}
          </p>
          <p>
            <strong>Tiền tệ:</strong> {currencies.length ? currencies.join(", ") : "N/A"}
          </p>
          <p>
            <strong>Múi giờ:</strong> {country.timezones.join(", ")}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
