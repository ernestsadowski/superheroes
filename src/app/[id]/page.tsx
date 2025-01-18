import Image from "next/image";
import { fetchSuperheroById } from '@/api/superheroAPI';

const options = { next: { revalidate: 30 } };

type PageProps = Promise<{
	id: number;
}>;

export default async function Page(props: { params: PageProps }) {
	const { id } = await props.params;
	const superhero = await fetchSuperheroById(id);
	console.log(superhero);

	return (
		<>
			<div className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<h1 className="text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">{superhero.name}</h1>
					<div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
						<div key={superhero.id}>
							<Image
								src={superhero.images.sm}
								alt={superhero.name}
								width={100}
								height={100}
								className="aspect-[2/3] w-full rounded-2xl object-cover"
							/>
							{/* <h3 className="mt-6 text-lg/8 font-semibold tracking-tight">{superhero.name}</h3> */}
							<p className="text-base/7 text-gray-300">{superhero.role}</p>
							<p className="text-sm/6 text-gray-500">{superhero.location}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
