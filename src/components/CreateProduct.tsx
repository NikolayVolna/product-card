export function CreateProduct() {
  return (
    <form>
      <input
        type="text"
        className="mb-2 w-full border py-2 px-4"
        placeholder="Enter product title..."
      />

      <button
        type="submit"
        className="rounded border border-green-500 bg-green-500 py-1 px-2 font-medium hover:bg-green-700">
        Create
      </button>
    </form>
  );
}
