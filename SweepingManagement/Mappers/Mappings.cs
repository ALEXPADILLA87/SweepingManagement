using AutoMapper;
using SweepingManagement.Entities;
using SweepingManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SweepingManagement.Mappers
{
    public static class Mappings
    {
        public static void Initialize()
        {
            AutoMapper.Mapper.Initialize(cfg => {
                UserEntityToModel(cfg);
                UserModelToEntity(cfg);
                CompanyEntityToModel(cfg);
                CompanyModelToEntity(cfg);
            });
        }
        
        public static void UserEntityToModel(AutoMapper.IMapperConfigurationExpression cfg)
        {
            cfg.CreateMap<UserEntity, UserModel>()

               .ForMember(dest => dest.Id, opts => opts.MapFrom(s => s.Id))
               .ForMember(dest => dest.Active, opts => opts.MapFrom(s => s.Active))
               .ForMember(dest => dest.EditedOn, opts => opts.MapFrom(s => s.EditedOn))
               .ForMember(dest => dest.Email, opts => opts.MapFrom(s => s.Email))
               .ForMember(dest => dest.FirstName, opts => opts.MapFrom(s => s.FirstName))
               .ForMember(dest => dest.LastName, opts => opts.MapFrom(s => s.LastName))
               .ForMember(dest => dest.Password, opts => opts.MapFrom(s => s.Password))
               .ForMember(dest => dest.Company_Name, opts => opts.MapFrom(s => s.Company != null ? s.Company.Name : String.Empty))
               .ForMember(dest => dest.Company_Id, opts => opts.MapFrom(s => s.Company != null ? s.Company.Id : 0));
        }

        public static void UserModelToEntity(AutoMapper.IMapperConfigurationExpression cfg)
        {
            cfg.CreateMap<UserModel, UserEntity>()

               .ForMember(dest => dest.Id, opts => opts.MapFrom(s => s.Id))
               .ForMember(dest => dest.Active, opts => opts.MapFrom(s => s.Active))
               .ForMember(dest => dest.EditedOn, opts => opts.MapFrom(s => s.EditedOn == DateTime.MinValue? DateTime.Now : s.EditedOn))
               .ForMember(dest => dest.Email, opts => opts.MapFrom(s => s.Email))
               .ForMember(dest => dest.FirstName, opts => opts.MapFrom(s => s.FirstName))
               .ForMember(dest => dest.LastName, opts => opts.MapFrom(s => s.LastName))
               .ForMember(dest => dest.Password, opts => opts.MapFrom(s => s.Password))
               .ForMember(dest => dest.Password, opts => opts.MapFrom(s => s.Password))
               .ForMember(dest => dest.CompanyId, opts => opts.MapFrom(s => s.Company_Id))
               .ForMember(dest => dest.Company, opts => opts.Ignore());
        }

        public static void CompanyEntityToModel(AutoMapper.IMapperConfigurationExpression cfg)
        {
            cfg.CreateMap<CompanyEntity, CompanyModel>()

               .ForMember(dest => dest.Id, opts => opts.MapFrom(s => s.Id))
               .ForMember(dest => dest.Active, opts => opts.MapFrom(s => s.Active))
               .ForMember(dest => dest.EditedOn, opts => opts.MapFrom(s => s.EditedOn))
               .ForMember(dest => dest.City, opts => opts.MapFrom(s => s.City))
               .ForMember(dest => dest.Name, opts => opts.MapFrom(s => s.Name))
               .ForMember(dest => dest.Phone, opts => opts.MapFrom(s => s.Phone))
               .ForMember(dest => dest.State, opts => opts.MapFrom(s => s.State))
               .ForMember(dest => dest.Street, opts => opts.MapFrom(s => s.Street))
               .ForMember(dest => dest.ZipCode, opts => opts.MapFrom(s => s.ZipCode));
        }

        public static void CompanyModelToEntity(AutoMapper.IMapperConfigurationExpression cfg)
        {
            cfg.CreateMap<CompanyModel, CompanyEntity>()

               .ForMember(dest => dest.Id, opts => opts.MapFrom(s => s.Id))
               .ForMember(dest => dest.Active, opts => opts.MapFrom(s => s.Active))
               .ForMember(dest => dest.EditedOn, opts => opts.MapFrom(s => s.EditedOn == DateTime.MinValue ? DateTime.Now : s.EditedOn))
               .ForMember(dest => dest.City, opts => opts.MapFrom(s => s.City))
               .ForMember(dest => dest.Name, opts => opts.MapFrom(s => s.Name))
               .ForMember(dest => dest.Phone, opts => opts.MapFrom(s => s.Phone))
               .ForMember(dest => dest.State, opts => opts.MapFrom(s => s.State))
               .ForMember(dest => dest.Street, opts => opts.MapFrom(s => s.Street))
               .ForMember(dest => dest.ZipCode, opts => opts.MapFrom(s => s.ZipCode))
               .ForMember(dest => dest.Users, opts => new List<CompanyEntity>());
        }
    }
}