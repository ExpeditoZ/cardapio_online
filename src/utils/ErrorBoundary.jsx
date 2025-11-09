
import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { hasError: false, error: null }; }
  static getDerivedStateFromError(error) { return { hasError: true, error }; }
  componentDidCatch(error, info) { console.error("ErrorBoundary:", error, info); }
  render() {
    if (this.state.hasError) {
      return <div className="container-pad mt-6 p-4 rounded-xl glass border border-white/10">
        <h1 className="text-xl font-semibold mb-1">Algo deu errado 😔</h1>
        <p className="text-sm text-white/70">{String(this.state.error?.message || "Erro desconhecido.")}</p>
      </div>;
    }
    return this.props.children;
  }
}
