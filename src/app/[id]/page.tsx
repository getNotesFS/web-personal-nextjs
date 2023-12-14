import api from "@/api";

export async function generateMetadata({params: {id}}: {params: {id: string}}) {
  try {
    const restaurant = await api.fetch(id);

    return {
      title: `${restaurant.name} - Restaurancy`,
      description: restaurant.description,
    };
  } catch (error) {
    console.error("Error fetching restaurant data:", error);

    // Puedes manejar el error de alguna manera apropiada, como mostrando un mensaje al usuario.
    return {
      title: "Error",
      description: "There was an error fetching restaurant data.",
    };
  }
}

export default async function RestaurantPage({params: {id}}: {params: {id: string}}) {
  try {
    const restaurant = await api.fetch(id);

    return (
      <article key={restaurant.id}>
        <img
          alt={restaurant.name}
          className="mb-3 h-[300px] w-full object-cover"
          src={restaurant.image}
        />
        <h2 className="inline-flex gap-2 text-lg font-bold">
          <span>{restaurant.name}</span>
          <small className="inline-flex gap-1">
            <span>⭐</span>
            <span>{restaurant.score}</span>
            <span className="font-normal opacity-75">({restaurant.ratings})</span>
          </small>
        </h2>
        <p className="opacity-90">{restaurant.description}</p>
      </article>
    );
  } catch (error) {
    console.error("Error fetching restaurant data:", error);

    // Puedes manejar el error de alguna manera apropiada, como mostrando un mensaje al usuario.
    return (
      <div>
        <p>Error fetching restaurant data.</p>
      </div>
    );
  }
}
