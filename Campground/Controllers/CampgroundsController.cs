using Campground.Data;
using Campground.DTOs;
using Campground.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Campground.Controllers
{
  
    public class CampgroundsController : BaseApiController
    {
        private readonly DataContext _context;

        public CampgroundsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Camp>>> GetCampgrounds()
        {
            return await _context.Campgrounds.ToListAsync(); 
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Camp>> GetCampgroundById(int id)
        {
            return await _context.Campgrounds.FindAsync(id);
        }

        [HttpPost("createCampground")]
        public async Task<ActionResult<Camp>> CreateCampground(CampgroundDTO campgroundDto)
        {
            if(await CampgroundExists(campgroundDto.Title))
            {
                return BadRequest("Campground already exists");
            }

            var campground = new Camp
            {
                Title = campgroundDto.Title.ToLower(),
                Price = campgroundDto.Price,
                Description = campgroundDto.Description,
                Location = campgroundDto.Location,
            };

            _context.Campgrounds.Add(campground);
            await _context.SaveChangesAsync();

            return campground;
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Camp>> UpdateCampground(int id, CampgroundDTO campgroundDto)
        {
            var existingCampground = await _context.Campgrounds.FindAsync(id);

            if (existingCampground == null)
            {
                return NotFound($"Campground with ID {id} not found");
            }

            if(await CampgroundExists(campgroundDto.Title))
            {
                return BadRequest("Campground with this title already exists");
            }

            existingCampground.Title = campgroundDto.Title.ToLower();
            existingCampground.Price = campgroundDto.Price;
            existingCampground.Description = campgroundDto.Description;
            existingCampground.Location = campgroundDto.Location;

            await _context.SaveChangesAsync();

            return existingCampground;
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteCampground(int id)
        {
            var campground = await _context.Campgrounds.FindAsync(id);

            if(campground == null)
            {
                return NotFound($"Campground with ID {id} not found");
            }

            _context.Campgrounds.Remove(campground);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private async Task<bool> CampgroundExists(string title)
        {
            return await _context.Campgrounds.AnyAsync(x => x.Title == title.ToLower());
        }
    }
}
