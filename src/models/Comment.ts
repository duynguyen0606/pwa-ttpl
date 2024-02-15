class CommentModel {
  id: string;
  created_by: string;
  created_by_email: string;
  created_by_avartar: string;
  created_by_full_name: string;
  title: string;
  total_like: number;
  total_comment_child: number;
  created_at: string;
  like: number;
  level: number;

  constructor(args: any) {
    this.id = args.id ?? '';
    this.created_by = args.created_by ?? '';
    this.created_by_email = args.created_by_email ?? '';
    this.created_by_avartar = args.created_by_avartar ?? '';
    this.created_by_full_name = args.created_by_full_name ?? '';
    this.title = args.title ?? '';
    this.total_like = args.total_like ?? null;
    this.total_comment_child = args.total_comment_child ?? null;
    this.created_at = args.created_at ?? '';
    this.like = args.like ?? null;
    this.level = args.level ?? null;
  }
}

export default CommentModel;
