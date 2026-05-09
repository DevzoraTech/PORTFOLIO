"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsModule = void 0;
const common_1 = require("@nestjs/common");
const project_repository_1 = require("./domain/project.repository");
const prisma_project_repository_1 = require("./infrastructure/persistence/prisma-project.repository");
const get_all_projects_use_case_1 = require("./application/use-cases/get-all-projects.use-case");
const project_controller_1 = require("./presentation/controllers/project.controller");
let ProjectsModule = class ProjectsModule {
};
exports.ProjectsModule = ProjectsModule;
exports.ProjectsModule = ProjectsModule = __decorate([
    (0, common_1.Module)({
        controllers: [project_controller_1.ProjectController],
        providers: [
            get_all_projects_use_case_1.GetAllProjectsUseCase,
            {
                provide: project_repository_1.IProjectRepository,
                useClass: prisma_project_repository_1.PrismaProjectRepository,
            },
        ],
    })
], ProjectsModule);
//# sourceMappingURL=projects.module.js.map