class Page {
    open(path: string) {
        return cy.visit(path);
    }
}

export default Page