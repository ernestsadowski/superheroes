import Image from "next/image";
import { fetchSuperheroById } from '@/api/superheroAPI';

type PageProps = Promise<{
	id: number;
}>;

export default async function Page(props: { params: PageProps }) {
	const { id } = await props.params;
	const superhero = await fetchSuperheroById(id);
	// console.log(superhero);

	return (
		<>
			<div className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">

					{/* HeroHeader */}
					<div className="lg:flex gap-12">
						<div className="flex-1 mb-12">
							<Image
								src={superhero.images.lg}
								alt={superhero.name}
								width={100}
								height={100}
								className="aspect-[2/3] w-full rounded-2xl object-cover"
							/>
						</div>
						<div className="flex-[2]">
							<h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{superhero.name}</h1>
							<ul
								role="list"
								className="mt-10 grid md:grid-cols-2 gap-x-4 gap-y-4"
							>
								{Object.entries(superhero.powerstats).map(([key, value]) => (
									<li key={key} className="text-xl">
										<span className="font-semibold uppercase">{key}</span>: {value}
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* HeroDetails - Appearance */}
					<section className="mt-12">
						<header>
							<h3 className="text-xl font-semibold text-gray-900">Appearance</h3>
						</header>
						<div className="mt-6">
							<dl className="grid grid-cols-1 sm:grid-cols-2">
								<div className="border-t border-gray-100 py-6 sm:col-span-1">
									<dt className="font-semibold text-gray-900">Gender</dt>
									<dd className="mt-1 text-gray-700 sm:mt-2">{superhero.appearance.gender}</dd>
								</div>
								<div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
									<dt className="font-semibold text-gray-900">Race</dt>
									<dd className="mt-1 text-gray-700 sm:mt-2">{superhero.appearance.race}</dd>
								</div>
								<div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
									<dt className="font-semibold text-gray-900">Height</dt>
									<dd className="mt-1 text-gray-700 sm:mt-2">{superhero.appearance.height.join(' / ')}</dd>
								</div>
								<div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
									<dt className="font-semibold text-gray-900">Weight</dt>
									<dd className="mt-1 text-gray-700 sm:mt-2">{superhero.appearance.weight.join(' / ')}</dd>
								</div>
								<div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
									<dt className="font-semibold text-gray-900">Eye Color</dt>
									<dd className="mt-1 text-gray-700 sm:mt-2">{superhero.appearance.eyeColor}</dd>
								</div>
								<div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
									<dt className="font-semibold text-gray-900">Hair Color</dt>
									<dd className="mt-1 text-gray-700 sm:mt-2">{superhero.appearance.hairColor}</dd>
								</div>
							</dl>
						</div>
					</section>

					{/* HeroDetails - Biography */}
					<section className="mt-12">
						<header className="px-4 sm:px-0">
							<h3 className="text-xl font-semibold text-gray-900">Biography</h3>
						</header>
						<div className="mt-6">
							<dl className="grid grid-cols-1 sm:grid-cols-2">
								<div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
									<dt className="font-semibold text-gray-900">Full Name</dt>
									<dd className="mt-1 text-gray-700 sm:mt-2">{superhero.biography.fullName}</dd>
								</div>
								<div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
									<dt className="font-semibold text-gray-900">Alter Egos</dt>
									<dd className="mt-1 text-gray-700 sm:mt-2">{superhero.biography.alterEgos}</dd>
								</div>
								<div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
									<dt className="font-semibold text-gray-900">Aliases</dt>
									<dd className="mt-1 text-gray-700 sm:mt-2">{superhero.biography.aliases.join(' / ')}</dd>
								</div>
								<div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
									<dt className="font-semibold text-gray-900">Place Of Birth</dt>
									<dd className="mt-1 text-gray-700 sm:mt-2">{superhero.biography.placeOfBirth}</dd>
								</div>
								<div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
									<dt className="font-semibold text-gray-900">First Appearance</dt>
									<dd className="mt-1 text-gray-700 sm:mt-2">{superhero.biography.firstAppearance}</dd>
								</div>
								<div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
									<dt className="font-semibold text-gray-900">Publisher</dt>
									<dd className="mt-1 text-gray-700 sm:mt-2">{superhero.biography.publisher}</dd>
								</div>
							</dl>
						</div>
					</section>

				</div>
			</div>


		</>
	);
}
