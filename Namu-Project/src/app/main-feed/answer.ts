import { User, users } from './user';
import { questions } from '../question-feed/question';

export class Answer {
  id: number;
  user: User;
  question: string;
  content: string;
  stats: object;
}

export const answers = [
  {
    id: 1,
    user: users.um,
    question: questions[0].question,
    content : 'Angular는 SPA(Single Page Application) 개발을 위한 구글의 오픈소스 자바스크립트 프레임워크이다. 웹뿐만 아니라 모바일 웹, 네이티브 모바일과 데스크탑 애플리케이션까지 프론트엔드 개발에 필요한 대부분의 기능을 갖추고 있다. 정적 타입을 제공하는 TypeScript를 주력 언어로 채택하여 대규모 애플리케이션 개발에 보다 적합한 환경...',
    stats : {
      starHits: 2000,
      comments: 10
    }
  },
  {
    id: 2,
    user: users.mz,
    question: questions[1].question,
    content: 'Facebook 전반에 걸쳐 다양한 광고 형식을 사용할 수 있습니다. 사용할 수 있는 광고 형식은 선택한 광고 목표에 따라 달라지며 비즈니스 목표에 부합하는 광고 목표를 선택하는 것이 중요합니다. 광고 목표는 광고의 노출 위치에도 영향을 줄 수 있습니다. 즉, 선택한 목표에 따라 광고가 Instagram, Audience Network 또는 Facebook...',
    stats: {
      starHits: 2000,
      comments: 10
    }
  },
  {
    id: 3,
    user: users.ch,
    question: questions[2].question,
    content: '1990년 고딩2때 청주에서 전국체전이 열렸다. 그리고 주간야구라는 당시 유일했던 야구잡지사에서 글을 쓰는 기자분이 그라운드안에서 내게 인사를 건냈다. 그리고 몇가지 질문을 하고나서 내게 훗날 좋은 선수가 되길바란다고했다. 그리고 다음해 1991년 여름, 국가대표로 미국에서 활약하고 돌아온 나는 공항에서 일년전 그기자형을 만났다...',
    stats: {
      starHits: 2000,
      comments: 10
    }
  }
];

/*
export class Answer {
  [id: number]: {
    user: User;
    question: string;
    content: string;
    stats: object;
  }
}

export const answers = {
  1: {
    user: users.um,
    question: questions[1].qustion,
    content : 'Angular는 SPA(Single Page Application) 개발을 위한 구글의 오픈소스 자바스크립트 프레임워크이다. 웹뿐만 아니라 모바일 웹, 네이티브 모바일과 데스크탑 애플리케이션까지 프론트엔드 개발에 필요한 대부분의 기능을 갖추고 있다. 정적 타입을 제공하는 TypeScript를 주력 언어로 채택하여 대규모 애플리케이션 개발에 보다 적합한 환경...',
    stats : {
      starHits: 2000,
      comments: 10
    }
  },
  2: {
    user: users.mz,
    question: questions[2].qustion,
    content: 'Facebook 전반에 걸쳐 다양한 광고 형식을 사용할 수 있습니다. 사용할 수 있는 광고 형식은 선택한 광고 목표에 따라 달라지며 비즈니스 목표에 부합하는 광고 목표를 선택하는 것이 중요합니다. 광고 목표는 광고의 노출 위치에도 영향을 줄 수 있습니다. 즉, 선택한 목표에 따라 광고가 Instagram, Audience Network 또는 Facebook...',
    stats: {
      starHits: 2000,
      comments: 10
    }
  },
  3: {
    id: 1,
    user: users.ch,
    question: questions[3].qustion,
    content: '1990년 고딩2때 청주에서 전국체전이 열렸다. 그리고 주간야구라는 당시 유일했던 야구잡지사에서 글을 쓰는 기자분이 그라운드안에서 내게 인사를 건냈다. 그리고 몇가지 질문을 하고나서 내게 훗날 좋은 선수가 되길바란다고했다. 그리고 다음해 1991년 여름, 국가대표로 미국에서 활약하고 돌아온 나는 공항에서 일년전 그기자형을 만났다...',
    stats: {
      starHits: 2000,
      comments: 10
    }
  }
};
*/
