import { User, users } from './user';
import { questions } from './question';

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

export const expandedContents = {
  1: {
    content: 'Angular는 SPA(Single Page Application) 개발을 위한 구글의 오픈소스 자바스크립트 프레임워크이다. 웹뿐만 아니라 모바일 웹, 네이티브 모바일과 데스크탑 애플리케이션까지 프론트엔드 개발에 필요한 대부분의 기능을 갖추고 있다. 정적 타입을 제공하는 TypeScript를 주력 언어로 채택하여 대규모 애플리케이션 개발에 보다 적합한 환경을 제공한다. 이전 버전인 AngularJS는 2009년 구글의 미스코 헤브리(Miško Hevery)가 시작한 개인 프로젝트로 시작하여 2012년 AngularJS 1.0이 공개되었으며 2017년 1.6.2이 공개되는 등 Angular 정식 버전이 공개된 이후에도 지속적으로 업데이트를 진행하고 있다. Angular는 AngularJS(version 1)의 후속 버전으로 2014년 ng 컨퍼런스에서 처음으로 소개되었다. 2016년 9월 14일 Angular 2 버전이 공개되었고 Angular 3을 뛰어 넘어 2017년 3월 23일 Angular 4, 2017년 11월 1일 Angular 5 정식 버전 pentagonal-donut이 출시되었다. Angular는 AngularJS의 후속 버전이지만 호환성이 없을 뿐아니라 알파, 베타, RC를 거치며 이전 버전과 호환성이 없는 변경인 Breaking Changes가 빈번하게 발생하여 많은 개발자를 혼란스럽게 하였다. 하지만 2016년 10월 발표된 이후 Angular 버저닝과 출시 계획에 따르면 개발자의 부담이 적은 방향으로 계획적인 버전업이 이루어질 듯하다. SemVer를 도입하여 버전 체계를 메이저, 마이너, 패치로 나누어 명확히 하고, 6개월간 1회의 메이저 릴리스(호환성이 없는 Breaking Change 포함), 3회의 마이너 릴리스(Breaking Change 없는 호환성이 있는 변경) 그리고 주단위의 패치 릴리스(버그 수정)가 실시될 예정이다. 이와 같이 Angular는 버전업이 빠르게 진행중이며 앞으로도 빈번한 변경이 예상된다. 특히 호환성이 없는 메이저 버전업에 대해서는 주의가 필요하다. 다행인 것은 Angular1에서 Angular2로의 버전업에서 나타난 것과 같은 큰 변경이 향후 버전에서는 없을 것이라는 것이다.'
  },
  2: {
    content: 'Facebook 전반에 걸쳐 다양한 광고 형식을 사용할 수 있습니다. 사용할 수 있는 광고 형식은 선택한 광고 목표에 따라 달라지며 비즈니스 목표에 부합하는 광고 목표를 선택하는 것이 중요합니다. 광고 목표는 광고의 노출 위치에도 영향을 줄 수 있습니다. 즉, 선택한 목표에 따라 광고가 Instagram, Audience Network 또는 Facebook 뉴스피드 등 가장 적절한 Facebook의 플랫폼을 통해 사람들에게 노출될 수 있습니다. 광고 목표를 선택했으면 올바른 광고 형식을 선택해야 합니다. 동영상, 이미지, 문구를 개별적으로 사용하든 여러 유형의 자산을 결합하든 비즈니스 목표에 맞는 Facebook 광고 형식을 선택할 수 있습니다. 이미지 광고: Facebook과 Instagram의 모든 광고에는 이미지가 필요합니다. 제품 또는 서비스와 관련된 이미지를 추가하는 것만으로도 광고 성과에 직접적인 영향을 주게 됩니다. 이미지 광고는 브랜드 인지도, 참여, 도달, 매장 방문 목표에 사용할 수 있습니다. 단일 이미지 광고를 사용할 수도 있고, 슬라이드, 컬렉션, 슬라이드쇼, 캔버스 광고를 사용하여 광고에 여러 이미지와 동영상을 포함할 수도 있습니다.'
  },
  3: {
    content: '1990년 고딩2때 청주에서 전국체전이 열렸다. 그리고 주간야구라는 당시 유일했던 야구잡지사에서 글을 쓰는 기자분이 그라운드안에서 내게 인사를 건냈다. 그리고 몇가지 질문을 하고나서 내게 훗날 좋은 선수가 되길바란다고했다. 그리고 다음해 1991년 여름, 국가대표로 미국에서 활약하고 돌아온 나는 공항에서 일년전 그기자형을 만났다. 당시 다른선수들과는 달리 서울에서 갈곳이 없었던 나를 집에 데리고가서 하루밤을 재워주셨다. 그기자형의 집에 도착해서 나는 기자형의 방안에 있던 책장속에 눈을 뗄수가 없었다. 책장속에는 온갓 영어로만된 미식축구, 농구,야구 잡지들이 가득했다. 그중에서 놀란라이언의 책은 나의 심장을 자극했다. 나는 기자형의 도움으로 대충 책속의 내용을 들으며 사진들을 관찰했다. 나의 그런모습을 보고는 그기자형은 내게 그책을 선물로 주셨다. 미국가서 좋은성적을 낸것보다 몇배 더 좋았다. 그뒤로 난 책속의 놀란라이언을 흉내내기시작했다. 놀란라이언처럼 강속구 투수가 되고싶었다. 그래서 런닝을 많이하고 웨이트트레이닝을 많이 한다는 책속의 내용과 사진들을 따라했다. 그리고 어느덧 난 강속구투구가 되어있었다. 꿈을 갖는다는것 그리고 꿈을 준다는것....그렇게 기자형님과 나는 꿈을 주고 받는 소중한 인연을 이어갔다. 훗날 나는 최초의 코리언 메이저리거가 되었고 그 기자형은 야구전문기자로써 최초의 야구단 사장이 되었다. 소중함과 고마운인연.'
  }
};
