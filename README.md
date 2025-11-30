# Debounced Search Demo

A small JavaScript project to demonstrate the **debouncing** concept.

## 🔍 What it does

- Simple search input box
- Filters a hardcoded product list as you type
- Uses a **debounce function** so the search runs **only after you stop typing** for a short delay (500ms)

## 🧠 What is Debouncing?

Debouncing is a technique where we **delay a function call** until a certain time has passed **without new input**.

Example use cases:
- Search box suggestions
- Auto-saving form data
- Window resize events
- Button click spam prevention

In this project:

- `searchProducts` = actual function that filters products
- `debounce(searchProducts, 500)` = wrapper that ensures `searchProducts` is called only after 500ms of no typing

## 🏗 Tech Stack

- HTML
- CSS
- Vanilla JavaScript

## 🌐 Live Demo

[Click here to view the project](https://yogeshleo8077.github.io/debounce-demo/)
