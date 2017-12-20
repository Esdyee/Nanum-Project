interface UserEmploymentCredentialRetrive {
  pk: number;
  url: string;
  company: {
    pk: number; // 해당 주제의 pk
    name: string;
    image: string;
  };
  position: string;
  start_year: number;
  end_year: any;
  working_status: boolean;
  type: string;
}


interface UserEducation {
  pk: number;
  url: string;
  school: {
    pk: number;
    name: string;
    image: string;
  };
  concentration: {
    pk: number;
    name: string;
    image: any;
  };
  degree_type: string;
  graduation_year: number;
  type: string;
}

interface UserCredential {
  pk: number;
  url: string;
  company: {
    pk: number;
    name: string;
    image: string;
  };
  position: string;
  start_year: number;
  end_year: any;
  working_status: boolean;
  type: string;
}

interface UserProfile {
  thumbnail_image_200: string;
  name: string;
  main_credential: string;
  description: string;
  follow_relation_pk: any;
}

interface UserStats {
  answer_count: number;
  upvote_count: any;
  follower_count: number;
  following_count: 0;
}
