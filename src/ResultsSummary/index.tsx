import React from 'react'
import { ReactComponent as MemoryIcon } from './assets/icon-memory.svg'
import { ReactComponent as ReactionIcon } from './assets/icon-reaction.svg'
import { ReactComponent as VerbalIcon } from './assets/icon-verbal.svg'
import { ReactComponent as VisualIcon } from './assets/icon-visual.svg'

function Score({ score, percentage }: { score: number; percentage: number }): JSX.Element {
    return (
        <div className="flex min-h-[450px] basis-1/2 flex-col items-center justify-between rounded-3xl bg-gradient-to-b from-[#7857FF] to-[#2E2BE9] pb-[50px] pt-[40px]">
            <div className="text-lg font-bold text-[#C8C7FF]">Your result</div>

            <div className="flex min-h-[170px] min-w-[170px] flex-col items-center justify-center rounded-full bg-gradient-to-b from-[#4E21CA] to-transparent">
                <div className="mb-2 text-6xl font-bold text-white">{score}</div>
                <div className="text-[#C8C7FF]">of 100</div>
            </div>

            <div className="text-2xl font-bold text-white">Great</div>

            <div className="max-w-[240px] text-center text-[#C8C7FF]">
                You scored higher then {percentage}% of the people who have taken these tests
            </div>
        </div>
    )
}

function SummaryItem({
    name,
    value,
    renderIcon,
    textCls,
    bgCls,
}: {
    name: string
    value: number
    renderIcon: () => JSX.Element
    textCls: string
    bgCls: string
}): JSX.Element {
    return (
        <div
            className={`flex min-h-[50px] min-w-[250px] flex-row items-center justify-between rounded-lg px-[15px] font-bold ${bgCls}`}
        >
            <div className="flex flex-row">
                <span className="mr-[15px]">{renderIcon()}</span>
                <span className={textCls}>{name}</span>
            </div>
            <div className="text-sm">
                <span>{value}</span>
                <span className="mx-1">/</span>
                <span className="font-normal text-slate-500">100</span>
            </div>
        </div>
    )
}

function Summary({ summary }: { summary: Record<string, number> }): JSX.Element {
    return (
        <div className="flex min-h-[450px] basis-1/2 flex-col items-center justify-between rounded-3xl pb-[50px] pt-[40px]">
            <div className="mb-4 min-w-[250px] text-left text-lg font-bold">Summary</div>

            <SummaryItem
                name="Reaction"
                value={summary.reaction}
                renderIcon={() => <ReactionIcon />}
                textCls="text-[#FF5757]"
                bgCls="bg-[#FFF6F5]"
            />

            <SummaryItem
                name="Memory"
                value={summary.memory}
                renderIcon={() => <MemoryIcon />}
                textCls="text-[#FFB01F]"
                bgCls="bg-[#FFFBF2]"
            />

            <SummaryItem
                name="Verbal"
                value={summary.verbal}
                renderIcon={() => <VerbalIcon />}
                textCls="text-[#00BD91]"
                bgCls="bg-[#F2FBFA]"
            />

            <SummaryItem
                name="Visual"
                value={summary.visual}
                renderIcon={() => <VisualIcon />}
                textCls="text-[#1125D4]"
                bgCls="bg-[#F3F3FD]"
            />

            <button className="mt-4 min-h-[50px] min-w-[250px] rounded-full bg-[#303b59] text-white">Continue</button>
        </div>
    )
}

export function ResultsSummary(): JSX.Element {
    const score = 76
    const percentage = 65

    const summary = {
        reaction: 80,
        memory: 92,
        verbal: 61,
        visual: 72,
    }

    return (
        <div className="container mx-auto flex min-h-screen items-center justify-center">
            <div className="flex min-h-[450px] min-w-[640px] items-center justify-center rounded-3xl bg-white drop-shadow-2xl">
                <Score score={score} percentage={percentage} />
                <Summary summary={summary} />
            </div>
        </div>
    )
}
