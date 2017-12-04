import { User, users } from '../main-feed/user';

export class Question {
  id: number;
  user: User;
  content: string;
}

export const questions = [
  {
    id: 1,
    user: users.me,
    question: 'Angular 프레임워크는 무엇인가요?'},
  {
    id: 2,
    user: users.me,
    question: 'Facebook 광고는 어떻게 시작하나요?'},
  {
    id: 3,
    user: users.me,
    question: '박찬호 선수에게 싸인을 받고 싶어요'
  },
];

/*
export class Question {
  [id: number]: {
    user: User;
    content: string;
  }
}

export const questions = {
  1: {
    user: users.me,
    qustion: 'Angular 프레임워크는 무엇인가요?'},
  2: {
    user: users.me,
    qustion: 'Facebook 광고는 어떻게 시작하나요?'},
  3: {
    user: users.me,
    qustion: '박찬호 선수에게 싸인을 받고 싶어요'
  },
};
*/
