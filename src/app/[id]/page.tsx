import { fetchSuperheroById } from '@/api/superheroAPI';
import HeroHeader from "@/components/HeroHeader";

type PageProps = Promise<{
	id: number;
}>;

export default async function Page(props: { params: PageProps }) {
	const { id } = await props.params;
	const superhero = await fetchSuperheroById(id);

	return (
		<div className="divide-y divide-gray-200">
			<HeroHeader superhero={
				{
					id: superhero.id,
					name: superhero.name,
					aliases: superhero.biography.aliases,
					powerstats: superhero.powerstats,
					image: superhero.images.lg
				}
			} />

			<div className="py-24 sm:py-32">
				<div className="container mx-auto p-6 lg:px-8">

					{/* HeroDetails - Appearance */}
					<section>
						<header>
							<h3 className="text-xl font-semibold text-gray-900">Appearance</h3>
						</header>
						<div className="mt-6">
							<dl className="grid grid-cols-1 sm:grid-cols-2">
								<div className="border-t border-gray-100 py-6 sm:col-span-1">
									<dt className="font-semibold text-gray-900">Gender</dt>
									<dd className="mt-1 text-gray-700 sm:mt-2">{superhero.appearance.gender}</dd>
								</div>
								<div className="border-t border-gray-100 py-6 sm:col-span-1">
									<dt className="font-semibold text-gray-900">Race</dt>
									<dd className="mt-1 text-gray-700 sm:mt-2">{superhero.appearance.race}</dd>
								</div>
								<div className="border-t border-gray-100 py-6 sm:col-span-1">
									<dt className="font-semibold text-gray-900">Height</dt>
									<dd className="mt-1 text-gray-700 sm:mt-2">{superhero.appearance.height.join(' / ')}</dd>
								</div>
								<div className="border-t border-gray-100 py-6 sm:col-span-1">
									<dt className="font-semibold text-gray-900">Weight</dt>
									<dd className="mt-1 text-gray-700 sm:mt-2">{superhero.appearance.weight.join(' / ')}</dd>
								</div>
								<div className="border-t border-gray-100 py-6 sm:col-span-1">
									<dt className="font-semibold text-gray-900">Eye Color</dt>
									<dd className="mt-1 text-gray-700 sm:mt-2">{superhero.appearance.eyeColor}</dd>
								</div>
								<div className="border-t border-gray-100 py-6 sm:col-span-1">
									<dt className="font-semibold text-gray-900">Hair Color</dt>
									<dd className="mt-1 text-gray-700 sm:mt-2">{superhero.appearance.hairColor}</dd>
								</div>
							</dl>
						</div>
					</section>

					{/* HeroDetails - Biography */}
					<section className="mt-12">
						<header>
							<h3 className="text-xl font-semibold text-gray-900">Biography</h3>
						</header>
						<div className="mt-6">
							<dl className="grid grid-cols-1 sm:grid-cols-2">
								<div className="border-t border-gray-100 py-6 sm:col-span-1">
									<dt className="font-semibold text-gray-900">Full Name</dt>
									<dd className="mt-1 text-gray-700 sm:mt-2">{superhero.biography.fullName}</dd>
								</div>
								<div className="border-t border-gray-100 py-6 sm:col-span-1">
									<dt className="font-semibold text-gray-900">Alter Egos</dt>
									<dd className="mt-1 text-gray-700 sm:mt-2">{superhero.biography.alterEgos}</dd>
								</div>
								<div className="border-t border-gray-100 py-6 sm:col-span-1">
									<dt className="font-semibold text-gray-900">Aliases</dt>
									<dd className="mt-1 text-gray-700 sm:mt-2">{superhero.biography.aliases.join(' / ')}</dd>
								</div>
								<div className="border-t border-gray-100 py-6 sm:col-span-1">
									<dt className="font-semibold text-gray-900">Place Of Birth</dt>
									<dd className="mt-1 text-gray-700 sm:mt-2">{superhero.biography.placeOfBirth}</dd>
								</div>
								<div className="border-t border-gray-100 py-6 sm:col-span-1">
									<dt className="font-semibold text-gray-900">First Appearance</dt>
									<dd className="mt-1 text-gray-700 sm:mt-2">{superhero.biography.firstAppearance}</dd>
								</div>
								<div className="border-t border-gray-100 py-6 sm:col-span-1">
									<dt className="font-semibold text-gray-900">Publisher</dt>
									<dd className="mt-1 text-gray-700 sm:mt-2">{superhero.biography.publisher}</dd>
								</div>
							</dl>
						</div>
					</section>

				</div>
			</div>


		</div>
	);
}
