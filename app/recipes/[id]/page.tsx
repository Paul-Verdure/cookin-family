interface Params {
  id: string;
}

const RecipesIdPage = ({ params }: { params: Params }) => {
  return (
    <div>
      <h1>Recipe {params.id}</h1>
    </div>
  );
};

export default RecipesIdPage;