import { t } from "@/i18n"
import { Hero } from "@/components/Hero";

export function Home() { 
    return /*html*/ `
    ${Hero()}
    <section class="Home_section1">
        <div>${t("home.title1")}</div>
        <div id="selector">
            <div>
                <div><label for="topic">Topic</label></div>
                <select id="topic">
                    <option value="food">Food</option>
                    <option value="weather">Weather</option>
                    <option value="travel">Travel</option>
                </select>
            </div>
            <div>
                <div><label for="level">Level</label></div>
                <select id="level">
                    <option value="A1">A1</option>
                    <option value="A2">A2</option>
                    <option value="B1">B1</option>
                    <option value="B2">B2</option>
                </select>
            </div>
            <div>
                <div><label for="duration">Duration:</label></div>
                <select id="duration">
                    <option value="45min">45 min</option>
                    <option value="60min">60 min</option>
                    <option value="90min">90 min</option>
                </select>
            </div>
            <div>
                <div><label for="lessonMood">Lesson mood</label></div>
                <select id="lessonMood">
                    <option value="calm">Calm</option>
                    <option value="energetic">Energetic</option>
                    <option value="talkative">Talkative</option>
                    <option value="focused">Focused</option>
                    <option value="creative">Creative</option>
                </select>
            </div>
        </div>

        <h1>Build your lesson</h1>

        <div id="cards">
            <div><span>Warm-up</span>
                <ul>A fun start to get students talking
                    <li>Discussion</li>
                    <li>Question cards</li>
                    <li>Picture talk</li>
                </ul>
            </div>
            <div><span>Vocabulary</span>
                <ul>Key words in context
                    <li>Flashcards</li>
                    <li>Matching</li>
                    <li>Mini quiz</li>
                </ul>
            </div>
            <div><span>Practice</span>
                <ul>Use it with confidence
                    <li>Gap fill</li>
                    <li>Reorder</li>
                    <li>True/False</li>
                </ul>
            </div>
            <div><span>Game</span>
                <ul>Learning through play
                    <li>Guessing game</li>
                    <li>Team challenge</li>
                    <li>Memory game</li>
                </ul>
            </div>
            <div><span>Speaking</span>
                <ul>Real communication
                    <li>Pairs</li>
                    <li>Role play</li>
                    <li>Discussion</li>
                </ul>
            </div>
            <div><span>Homework</span>
                <ul>Keep learning
                    <li>Writing</li>
                    <li>Vocabulary log</li>
                    <li>Creative task</li>
                </ul>
            </div>
        </div>

        <div id="build"><button id = "createLessonBtn">Build my lesson</button></div>
        <p id="result"></p>

        <div id="inspiration">
            <div>
                <div>@</div>
                <div>
                    <li>Easy to use</li>
                    <li>Create lessons step by step</li>
                </div>
            </div>

            <div>
                <div>@</div>
                <div>
                    <li>Fun and engaging</li>
                    <li>Students love the activities</li>
                </div>
            </div>

            <div>
                <div>@</div>
                <div>
                    <li>Ready to teach</li>
                    <li>Everything in one place</li>
                </div>
            </div>

            <div>
                <div>@</div>
                <div>
                    <li>Made by a teacher</li>
                    <li>For teachers @</li>
                </div>
            </div>
        </div>
    </section>
    <section class="Home_section2">${t("home.title2")}</section>
    `;
}