using AutoMapper;
using SweepingManagement.DataLayer.Repository;
using SweepingManagement.Entities;
using SweepingManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SweepingManagement.Controllers
{
    public class CompanyController : ApiController
    {
        private IGenericRepository<CompanyEntity> repository;

        public CompanyController()
        {
            this.repository = new GenericRepository<CompanyEntity>();
        }
        // GET api/<controller>
        public IEnumerable<CompanyModel> Get()
        {
            var entitiesList = repository.GetAll().ToList();
            IEnumerable<CompanyModel> models = entitiesList.Select(x => Mapper.Map<CompanyEntity, CompanyModel>(x));
            return models;
        }

        // GET api/<controller>/5
        public CompanyModel Get(int id)
        {
            var entity = repository.GetById(id);
            return Mapper.Map<CompanyEntity, CompanyModel>(entity);
        }

        // POST api/<controller>
        public object Post([FromBody]CompanyModel model)
        {
            try
            {
                var entity = Mapper.Map<CompanyModel, CompanyEntity>(model);
                repository.Create(entity);
                return new { success = true };

            }
            catch (Exception e)
            {
                return new { success = false };
            }
        }

        public object Put([FromBody]CompanyModel model)
        {
            try
            {
                var entity = Mapper.Map<CompanyModel, CompanyEntity>(model);
                repository.Update(entity);
                return new { success = true };

            }
            catch (Exception e)
            {
                return new { success = false };
            }
        }

        // DELETE api/<controller>/5
        [HttpDelete]
        public object Delete(int id)
        {
            try
            {
                repository.Delete(id);
                return new { success = true };

            }
            catch (Exception)
            {
                return new { success = false };
            }
        }
    }
}