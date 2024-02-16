import React from 'react';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Download from '../components/Download';
import CollapsibleSection from '../components/CollapsibleSection';

import test from '../assets/ahk/test.ahk'


function App() {
    return (
        <div>
            <Header text="Lab126 Scripts" />

            <Paragraph text="Welcome to my site! On here you will find PK-based AHK scripts that were created for the game Old School Runescape."/>

            <Paragraph text="Common FAQs can be found below."/>
            <CollapsibleSection title="FAQ Section" >
                <CollapsibleSection title="What is AHK?">
                    <p>
                        AHK aka AutoHotkey, is a free and open-source custom scripting language for Microsoft Windows, initially aimed at providing easy keyboard shortcuts or hotkeys, fast macro-creation and software automation that allows users of most levels of computer skill to automate repetitive tasks in any Windows application.
                    </p>
                </CollapsibleSection>
                <CollapsibleSection title="Why are these free?">
                    <p>
                        TLDR: Mostly for my own learning experience (hence why I made an entire website lmao), as well as having a belief that these type of simple scripts should not be behind an expensive paywall that people charge.
                    </p>
                </CollapsibleSection>
                <CollapsibleSection title="Hmm, seems sus, how can I know there isn't a virus?">
                    <p>
                        Everything here is open-source! You can check the raw code <a href='https://github.com/EIIis/old_ahk/tree/gh-pages/src/assets/ahk' target='_blank' rel='noopener noreferrer'>here</a> for yourself!
                    </p>
                </CollapsibleSection>
                <CollapsibleSection title="Could AHK cause me to be banned/against the rules?">
                    <p>
                        Simple answer is <b>YES</b>. Jagex has said that unless the actions are 1:1, then it is bannable.
                    </p>
                </CollapsibleSection>
                <CollapsibleSection title="Can I use this with Runelite/Jagex Launcher/etc...?">
                    <p>
                        Yup, as I stated this uses AutoHotkey by Microsoft. These aren't plugins, all you need is AutoHotkey downloaded and you're good to go :)
                    </p>
                </CollapsibleSection>
            </CollapsibleSection>

            <Paragraph text="Below you will find all my current scripts. I will add more as time goes by :)"/>
            <CollapsibleSection title="Scripts">
                <CollapsibleSection title="Double Gmaul -> Wack">
                    <Download fileUrl={test} fileName="random.ahk" text="TEST FILE"/>
                </CollapsibleSection>
            </CollapsibleSection>

            <Paragraph text="I invite everyone to joing my <a href='https://discord.gg/ZUcmmH2TK6' target='_blank' rel='noopener noreferrer'>Discord</a> for any help you need or just to chat!" />

        </div>
    );
}

export default App;
