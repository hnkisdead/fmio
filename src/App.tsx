import React from 'react'
import { Link, Route } from 'wouter'
import { ResultsSummary } from './ResultsSummary'

function Index(): JSX.Element {
    return (
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold">Projects</h1>
            <ul className="ml-5 mt-5 list-disc">
                <li>
                    <Link href="/results-summary">
                        <a>Results Summary</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export function App(): JSX.Element {
    return (
        <div>
            <Route path="/" component={Index} />
            <Route path="/results-summary" component={ResultsSummary} />
        </div>
    )
}
