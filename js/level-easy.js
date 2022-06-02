import{ createBoard, createCard, createFrontImg, createBackImg } from './create-level.js';
const boardWrapper = document.querySelector('[data-wrapper]');

export function createLevelEasy(){
    const board = createBoard('easy');
    boardWrapper.appendChild(board)

    const cardHtmlA = createCard('html');
    const cardHtmlAImg = createFrontImg('html');
    const cardHtmlAImgBack = createBackImg();
    cardHtmlA.appendChild(cardHtmlAImg);
    cardHtmlA.appendChild(cardHtmlAImgBack);
    board.appendChild(cardHtmlA);

    const cardHtmlB = createCard('html');
    const cardHtmlBImg = createFrontImg('html');
    const cardHtmlBImgBack = createBackImg();
    cardHtmlB.appendChild(cardHtmlBImg);
    cardHtmlB.appendChild(cardHtmlBImgBack);
    board.appendChild(cardHtmlB);

    const cardCssA = createCard('css');
    const cardCssAImg = createFrontImg('css');
    const cardCssAImgBack = createBackImg();
    cardCssA.appendChild(cardCssAImg);
    cardCssA.appendChild(cardCssAImgBack);
    board.appendChild(cardCssA);

    const cardCssB = createCard('css');
    const cardCssBImg = createFrontImg('css');
    const cardCssBImgBack = createBackImg();
    cardCssB.appendChild(cardCssBImg);
    cardCssB.appendChild(cardCssBImgBack);
    board.appendChild(cardCssB);

    const cardJavascriptA = createCard('javascript');
    const cardJavascriptAImg = createFrontImg('javascript');
    const cardJavascriptAImgBack = createBackImg();
    cardJavascriptA.appendChild(cardJavascriptAImg);
    cardJavascriptA.appendChild(cardJavascriptAImgBack);
    board.appendChild(cardJavascriptA);

    const cardJavascriptB = createCard('javascript');
    const cardJavascriptBImg = createFrontImg('javascript');
    const cardJavascriptBImgBack = createBackImg();
    cardJavascriptB.appendChild(cardJavascriptBImg);
    cardJavascriptB.appendChild(cardJavascriptBImgBack);
    board.appendChild(cardJavascriptB);

    const cardReactA = createCard('react');
    const cardReactAImg = createFrontImg('react');
    const cardReactAImgBack = createBackImg();
    cardReactA.appendChild(cardReactAImg);
    cardReactA.appendChild(cardReactAImgBack);
    board.appendChild(cardReactA);

    const cardReactB = createCard('react');
    const cardReactBImg = createFrontImg('react');
    const cardReactBImgBack = createBackImg();
    cardReactB.appendChild(cardReactBImg);
    cardReactB.appendChild(cardReactBImgBack);
    board.appendChild(cardReactB);

    const cardGithubA = createCard('github');
    const cardGithubAImg = createFrontImg('github');
    const cardGithubAImgBack = createBackImg();
    cardGithubA.appendChild(cardGithubAImg);
    cardGithubA.appendChild(cardGithubAImgBack);
    board.appendChild(cardGithubA);

    const cardGithubB = createCard('github');
    const cardGithubBImg = createFrontImg('github');
    const cardGithubBImgBack = createBackImg();
    cardGithubB.appendChild(cardGithubBImg);
    cardGithubB.appendChild(cardGithubBImgBack);
    board.appendChild(cardGithubB);

    const cardGitA = createCard('git');
    const cardGitAImg = createFrontImg('git');
    const cardGitAImgBack = createBackImg();
    cardGitA.appendChild(cardGitAImg);
    cardGitA.appendChild(cardGitAImgBack);
    board.appendChild(cardGitA);

    const cardGitB = createCard('git');
    const cardGitBImg = createFrontImg('git');
    const cardGitBImgBack = createBackImg();
    cardGitB.appendChild(cardGitBImg);
    cardGitB.appendChild(cardGitBImgBack);
    board.appendChild(cardGitB);

    return board;
}