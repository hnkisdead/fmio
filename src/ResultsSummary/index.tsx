import React from 'react'
import { ReactComponent as MemoryIcon } from './assets/icon-memory.svg'
import { ReactComponent as ReactionIcon } from './assets/icon-reaction.svg'
import { ReactComponent as VerbalIcon } from './assets/icon-verbal.svg'
import { ReactComponent as VisualIcon } from './assets/icon-visual.svg'

function Score({ score, percentage }: { score: number; percentage: number }): JSX.Element {
    return (
        <div className="flex min-h-[450px] basis-1/2 flex-col items-center justify-between rounded-b-3xl bg-gradient-to-b from-[#7857FF] to-[#2E2BE9] pb-12 pt-10 sm:rounded-3xl">
            <div className="text-lg font-bold text-violet-300">Your result</div>

            <div className="flex min-h-[170px] min-w-[170px] flex-col items-center justify-center rounded-full bg-gradient-to-b from-[#4E21CA] to-transparent">
                <div className="mb-2 text-6xl font-bold text-white">{score}</div>
                <div className="text-[#C8C7FF]">of 100</div>
            </div>

            <div className="text-2xl font-bold text-white">Great</div>

            <div className="w-3/4 text-center text-violet-300">
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
        <div className={`flex h-12 w-3/4 flex-row items-center justify-between rounded-lg px-4 font-bold ${bgCls}`}>
            <div className="flex flex-row">
                <span className="mr-3">{renderIcon()}</span>
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
        <div className="flex min-h-[450px] basis-1/2 flex-col items-center justify-between rounded-3xl pb-12 pt-10">
            <div className="mb-4 w-3/4 text-left text-lg font-bold">Summary</div>

            <SummaryItem
                name="Reaction"
                value={summary.reaction}
                renderIcon={() => <ReactionIcon className="stroke-red-500" />}
                textCls="text-red-500"
                bgCls="bg-red-50"
            />

            <SummaryItem
                name="Memory"
                value={summary.memory}
                renderIcon={() => <MemoryIcon className="stroke-yellow-500" />}
                textCls="text-yellow-500"
                bgCls="bg-yellow-50"
            />

            <SummaryItem
                name="Verbal"
                value={summary.verbal}
                renderIcon={() => <VerbalIcon className="stroke-green-500" />}
                textCls="text-green-500"
                bgCls="bg-green-50"
            />

            <SummaryItem
                name="Visual"
                value={summary.visual}
                renderIcon={() => <VisualIcon className="stroke-blue-500" />}
                textCls="text-blue-500"
                bgCls="bg-blue-50"
            />

            <button className="mt-4 h-12 w-3/4 rounded-full bg-slate-700 text-white">Continue</button>
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
            <div className="min-w-full items-center justify-center bg-white drop-shadow-2xl sm:flex sm:min-h-[450px] sm:min-w-[640px] sm:rounded-3xl">
                <Score score={score} percentage={percentage} />
                <Summary summary={summary} />
            </div>
        </div>
    )
}
