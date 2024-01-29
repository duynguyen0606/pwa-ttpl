class PostModel {
  id_post: string;
  count: string;
  created_by: string;
  created_at: string;
  files: string;
  view: string;
  url_key: string;
  title: string;
  description: string;
  post_id: string;

  constructor(args: any) {
    this.id_post = args.id_post ?? '';
    this.title = args.title ?? '';
    this.url_key = args.url_key ?? '';
    this.created_by = args.created_by ?? '';
    this.count = args.count ?? '';
    this.created_at = args.created_at ?? '';
    this.files = args.files ?? '';
    this.description = args.description ?? '';
    this.post_id = args.post_id ?? '';
    this.view = args.view ?? '';
  }
}

export default PostModel;
