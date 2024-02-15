class ArticleModel {
  id: string;
  title: string;
  created_by: number;
  url_key: string;
  created_by_email: string;
  created_by_avartar: string;
  created_by_full_name: string;
  description: string;
  short_description: string;
  list_file: Array<any>;
  images: string;
  view: number;
  type_post: string;
  total_like: number;
  is_follow: number;
  like: number;

  constructor(args: any) {
    this.id = args.id ?? null;
    this.title = args.title ?? '';
    this.url_key = args.url_key ?? '';
    this.created_by = args.created_by ?? null;
    this.created_by_email = args.created_by_email ?? '';
    this.created_by_avartar = args.created_by_avartar ?? '';
    this.created_by_full_name = args.created_by_full_name ?? '';
    this.description = args.description ?? '';
    this.short_description = args.short_description ?? '';
    this.list_file = args.list_file ?? null;
    this.images = args.images ?? '';
    this.view = args.view ?? null;
    this.type_post = args.type_post ?? '';
    this.total_like = args.total_like ?? null;
    this.like = args.like ?? null;
    this.is_follow = args.is_follow ?? null;
  }
}

export default ArticleModel;
