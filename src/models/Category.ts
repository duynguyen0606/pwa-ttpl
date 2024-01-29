class CategoryModel {
  id: string;
  name: string;
  url_key: string;
  images: string;
  deleted: string;

  constructor(args: any) {
    this.id = args.id ?? null;
    this.name = args.name ?? '';
    this.url_key = args.url_key ?? '';
    this.images = args.images ?? '';
    this.deleted = args.deleted ?? '';
  }
}

export default CategoryModel;
