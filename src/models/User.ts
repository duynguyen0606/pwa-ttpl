class User {
  id: string; // id của user
  first_name: string; // tên của user
  avatar: string; // Đường dẫn ảnh
  email: string; // email
  group_id: string; // id của nhóm mà user
  last_name: string;
  full_name: string;
  user_type: string;
  role_id: string;
  team_id: string;
  status: string;
  client_id: string;
  is_primary_contact: string;
  job_title: string;
  address: string;
  alternative_address: string;
  phone: string;
  alternative_phone: string;
  gender: string;
  nation: string;
  religion: string;
  nationality: string;
  marital_status: string;
  address_usually_lives: string;
  current_address: string;
  district: string;
  province_city: string;
  is_company_admin: string;
  point: string;
  account_ballance: string;
  images: string;
  banner: string;
  note: string;
  sticky_note: string;
  skype: string;
  price: string;
  introduce: string;
  fields: string;
  website: string;
  main_marketing: string;
  business_type: string;
  career: string;
  experience: string;
  tax_code: string;
  representative;
  representative_phone: string;
  vip: string;
  count_comment: string;

  constructor(args: any) {
    this.id = args.id;
    this.first_name = args.first_name;
    this.avatar = args.avatar;
    this.email = args.email;
    this.group_id = args.group_id;
    this.last_name = args.last_name;
    this.full_name = args.full_name;
    this.user_type = args.user_type;
    this.role_id = args.role_id;
    this.team_id = args.team_id;
    this.email = args.email;
    this.status = args.status;
    this.client_id = args.client_id;
    this.is_primary_contact = args.is_primary_contact;
    this.job_title = args.job_title;
    this.address = args.address;
    this.alternative_address = args.alternative_address;
    this.phone = args.phone;
    this.alternative_phone = args.alternative_phone;
    this.gender = args.gender;
    this.nation = args.nation;
    this.religion = args.religion;
    this.nationality = args.nationality;
    this.marital_status = args.marital_status;
    this.address_usually_lives = args.address_usually_lives;
    this.current_address = args.current_address;
    this.district = args.district;
    this.province_city = args.province_city;
    this.is_company_admin = args.is_company_admin;
    this.point = args.point;
    this.account_ballance = args.account_ballance;
    this.images = args.images;
    this.banner = args.banner;
    this.note = args.note;
    this.sticky_note = args.sticky_note;
    this.skype = args.skype;
    this.price = args.price;
    this.introduce = args.introduce;
    this.fields = args.fields;
    this.website = args.website;
    this.main_marketing = args.main_marketing;
    this.business_type = args.business_type;
    this.career = args.career;
    this.experience = args.experience;
    this.tax_code = args.tax_code;
    this.representative = args.representative;
    this.representative_phone = args.representative_phone;
    this.vip = args.vip;
    this.count_comment = args.count_comment;
  }
}

export default User;
